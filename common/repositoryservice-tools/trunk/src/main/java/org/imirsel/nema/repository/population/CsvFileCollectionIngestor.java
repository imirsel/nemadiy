package org.imirsel.nema.repository.population;

import java.beans.XMLDecoder;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.channels.FileChannel;
import java.sql.SQLException;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.imirsel.nema.model.NemaFile;
import org.imirsel.nema.model.util.DeliminatedTextFileUtilities;
import org.imirsel.nema.model.util.IOUtil;

public class CsvFileCollectionIngestor {

	private static final String[] SUPPORTED_TRACK_COLS = new String[]{
			"Title", "Album", "Artist", "Composer", "Genre", "Year"//, "Persistent ID", "Track ID"																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																
	};
	private static final String[] SUPPORTED_FILE_COLS = new String[]{
			"bitrate", "encoding", "sample-rate", "channels"																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																	
	};
	private static final String FILE_PATH_COL = "path";

	private static final Logger logger = Logger.getLogger(CsvFileCollectionIngestor.class.getName());
	
	public static final String USAGE = "args: /path/to/file.csv sitename collection_id(int) /path/to/new/audio/dir seriesNamePrefix_ deliminator(T|S|C)";
	
	public static void main(String[] args) {
		if(args.length != 6){
			System.out.println("Wrong number of arguments!" + USAGE);
		}
		try {
			File csvFile = new File(args[0]); 
			String site = args[1]; 
			int collection_id = Integer.parseInt(args[2]); 
			File newAudioDirectory = new File(args[3]); 
			String seriesName = args[4];
			String delim = args[5];

			String delimString = null;
			if(delim.equalsIgnoreCase("C")){
				delimString = ",";
			}else if(delim.equalsIgnoreCase("S")){
				delimString = "\\s+";
			}else if(delim.equalsIgnoreCase("T")){
				delimString = "\t";
			}else {
				throw new IllegalArgumentException("Failed to interpret delimitter '" + delim + "', please enter T (tab), S (space) or C (comma)");
			}
			
			ingestCollectionFromCSVFile(csvFile, site, collection_id, newAudioDirectory, seriesName, delimString);
		}catch(Exception e) {
			throw new RuntimeException(e);
		}
	}
	
    /**
     * Copies one file into another.
     * 
     * @param in File to copy.
     * @param out Location to copy it to.
     * @throws IOException
     */
	private static void copyFile(File in, File out) throws IOException {
		FileChannel inChannel = new FileInputStream(in).getChannel();
		FileChannel outChannel = new FileOutputStream(out).getChannel();
		try {
			inChannel.transferTo(0, inChannel.size(), outChannel);
		} catch (IOException e) {
			throw e;
		} finally {
			if (inChannel != null)
				inChannel.close();
			if (outChannel != null)
				outChannel.close();
		}
	}
    
	
	public static void ingestCollectionFromCSVFile(
			File csvFile, 
			String site,
			int collection_id, 
			File newAudioDirectory, 
			String seriesName,
			String delimiter
			) throws IllegalArgumentException, FileNotFoundException, IOException, SQLException {
		
		Logger.getLogger("org.imirsel.nema.repository.population.RepositoryUpdateClientImpl").setLevel(Level.WARNING);
		
		System.out.println("Ingesting dataset, moving/renaming files and inserting metadata/paths into DB...");
		System.out.println("Arguments:");

		System.out.println("CSV file to import: " +  csvFile.getAbsolutePath());
		System.out.println("site:               " +  site);
		System.out.println("collection_id:      " +  collection_id);
		System.out.println("newAudioDirectory:  " + newAudioDirectory.getAbsolutePath());
		System.out.println("seriesName:         " +  seriesName);
		System.out.println("delimmiter:         '" +  delimiter + "'");
		
		
	    //read CSV files headers
	    System.out.println("Mapping CSV headers to fields...");
	    BufferedReader in = new BufferedReader(new FileReader(csvFile));
	    String headerLine = in.readLine();
	    String[] headers = DeliminatedTextFileUtilities.parseDelimTextLine(headerLine, delimiter);
	    System.out.println("Got headers:");
	    for (int i = 0; i < headers.length; i++) {
			System.out.println("\t'" + headers[i] + "'" );
		}
	    Map<String,Integer> headerToCol;
	    Map<String,Integer> trackMeta;
	    
	    int[] trackColToCsvColNum = new int[SUPPORTED_TRACK_COLS.length];
	    int[] trackColToMetadataId = new int[SUPPORTED_TRACK_COLS.length];

	    int[] fileColToCsvColNum = new int[SUPPORTED_FILE_COLS.length];
	    int[] fileColToMetadataId = new int[SUPPORTED_FILE_COLS.length];
	    int pathCol = -1;
	    
	  //connect to DB
		RepositoryUpdateClientImpl client = new RepositoryUpdateClientImpl();

		int siteId = client.getSiteId(site);
		if(siteId == -1){
			throw new RuntimeException("Failed to resolve site name '" + site + "' to a site ID!");
		}
		
		try{
		    //map track cols
		    for (int i = 0; i < SUPPORTED_TRACK_COLS.length; i++) {
		    	trackColToCsvColNum[i] = -1;
				for (int j = 0; j < headers.length; j++) {
					if(headers[j].equalsIgnoreCase(SUPPORTED_TRACK_COLS[i])){
						trackColToCsvColNum[i] = j;
						break;
					}
				}
				if (trackColToCsvColNum[i] == -1){
					getLogger().warning("Did not find header '" + SUPPORTED_TRACK_COLS[i] + "' in file. Hence, data for this field will not be ingested."); 
				}
				trackColToMetadataId[i] = client.getTrackMetadataID(SUPPORTED_TRACK_COLS[i]);
				if (trackColToMetadataId[i] == -1){
					throw new RuntimeException("Did not get track metadata id for column  '" + SUPPORTED_TRACK_COLS[i] + "' in file. Cannot continue ingestion."); 
				}
			}
		    
		    //map file cols
		    for (int i = 0; i < SUPPORTED_FILE_COLS.length; i++) {
		    	fileColToCsvColNum[i] = -1;
				for (int j = 0; j < headers.length; j++) {
					if(headers[j].equalsIgnoreCase(SUPPORTED_FILE_COLS[i])){
						fileColToCsvColNum[i] = j;
						break;
					}
				}
				if (fileColToCsvColNum[i] == -1){
					getLogger().warning("Did not find header '" + SUPPORTED_FILE_COLS[i] + "' in file. Hence, data for this field will not be ingested."); 
				}
				fileColToMetadataId[i] = client.getFileMetadataID(SUPPORTED_FILE_COLS[i]);
				if (fileColToMetadataId[i] == -1){
					throw new RuntimeException("Did not get file metadata id for column  '" + SUPPORTED_FILE_COLS[i] + "' in file. Cannot continue ingestion."); 
				}
			}
		    
		    //map path col
		    pathCol = -1;
			for (int j = 0; j < headers.length; j++) {
				if(headers[j].equalsIgnoreCase(FILE_PATH_COL)){
					pathCol = j;
					break;
				}
			}
			if (pathCol == -1){
				throw new IllegalArgumentException("Did not find header '" + FILE_PATH_COL + "' in file representing the path to the audio file. Cannot continue ingestion.");
			}
			
			System.out.println("...done.");
			
			//pause so we can cancel if need be
			int togo = 18;
		    while(togo > 0){
		        getLogger().info("Commencing ingestion operation in " + togo + " seconds");
		        togo -= 5;
		        try{
		            Thread.sleep(5000);
		        }catch (InterruptedException ex){
		            getLogger().log(Level.SEVERE, null, ex);
		        }
		    }
			
		    
		    System.out.println("Starting ingestion.");
			
		  //setup new root directory
		    File newHome = new File(newAudioDirectory.getAbsolutePath() + File.separator + seriesName);
			if(!newHome.exists()) {
				if(!newHome.mkdirs()) {
					throw new IllegalArgumentException("Failed to create directory for the " +
							"proposed home for the new series '" + newHome.getAbsolutePath() + "'!");
				}
			}
			
			
			BufferedWriter out = null;
			try{
			    int lineNum = 0;
			    
			    //variables
				String line = in.readLine();
				String newId, path, name, extension, val;
				File oldFile, newFile;
				long oldLen, newLen;
				int valId, fileId;
				String[] comps;
				
				//loop through file
				while(line != null){
					lineNum++;
				
					comps = DeliminatedTextFileUtilities.parseDelimTextLine(line, delimiter);
					if (pathCol >= comps.length){
						String msg = "Number of cells on line " + lineNum + " is less than expected.\n" +
						"Path col was:         " + pathCol + "\n" +
						"number of components: " + comps.length + "\n" +
						"line: " + line + "\n" +
						"components:\n";
						for (int i = 0; i < comps.length; i++) {
							msg += i + ":\t'" + comps[i] + "'\n";
						}
						throw new RuntimeException(msg);
					}
					
					//generate trackID
					newId = seriesName + RepositoryManagementUtils.SIX_DIGIT_INTEGER.format(lineNum);
					path = URLDecoder.decode(comps[pathCol],"UTF8");
					System.out.println("Track " + lineNum + ", new track id: " + newId);
					
					
					
					oldFile = new File(path);
					name = oldFile.getName();
					extension = name.substring(name.lastIndexOf("."));
					
					//check it does not already exist in DB - for resuming
					NemaFile existingFile = client.getFileByLegacyPath(oldFile.getAbsolutePath());
					if(existingFile != null){
						System.out.println("Skipping insertion of path: " + oldFile.getAbsolutePath() + 
								" as it already exists in the collection as track Id '" + existingFile.getTrackId() + "', path: " + existingFile.getPath() + "\n");
						line = in.readLine();
						continue;
					}
					
					
					//copy and rename file based on track id
					newFile =  new File(newHome.getAbsolutePath() + File.separator + newId + extension);
					System.out.println("old path: " + oldFile.getAbsolutePath() + ", new path: " + newFile.getAbsolutePath());
					oldLen = oldFile.length();
					
					try{
						copyFile(oldFile, newFile);
					}catch(FileNotFoundException e){
						if (out == null){
							out = new BufferedWriter(new FileWriter("filesNotFound.csv"));
							out.write(headerLine);
						}
						out.write(line);
						out.newLine();
						out.flush();
						
						System.out.println("Failed to copy " + oldFile.getAbsolutePath() + " as it did not exist, skipping insertion and writing data to filesNotFound.csv\n");
						line = in.readLine();
						continue;
					}
					
					
					newLen = newFile.length();
					System.out.println("old file length: " + oldLen + ", new length: " + newLen);
					if(oldLen != newLen) {
						throw new RuntimeException ("WARNING: old (" + oldLen + ") and new (" + newLen + ") file lengths don't match!");
					}
					
					//start DB transaction
					client.startTransation();
					
					//insert track ID
					client.insertTrack(newId);
					
					//insert collection link
                    client.insertTrackCollectionLink(collection_id, newId);
					
					//insert track metadata
			        for (int t=0; t<SUPPORTED_TRACK_COLS.length;t++){
			        	if(trackColToCsvColNum[t] != -1){
			        		val = comps[trackColToCsvColNum[t]].trim();
			        		if(!val.equals("")){
			        			valId = client.insertTrackMeta(trackColToMetadataId[t], val);
			        			System.out.println(SUPPORTED_TRACK_COLS[t] + ":" + val);
			        			client.insertTrackMetaLink(newId, valId);
			        		}
			        	}
			        }
					
					//insert file 
			        fileId = client.insertFile(newId, newFile.getAbsolutePath(), siteId);
			        if (fileId == -1){
			        	throw new RuntimeException("Failed to insert file for track ID: " + newId + "\nold path: " + oldFile.getAbsolutePath() + ", new path: " + newFile.getAbsolutePath());
			        }
			        
			        //insert legacy file path
                    client.insertLegacyFilePath(fileId, oldFile.getAbsolutePath());
			        
			        //insert file metadata
                    for (int f=0; f<SUPPORTED_FILE_COLS.length;f++){
			        	if(fileColToCsvColNum[f] != -1){
			        		val = comps[fileColToCsvColNum[f]].trim();
			        		if(!val.equals("")){
			        			valId = client.insertFileMeta(fileColToMetadataId[f], val);
			        			System.out.println(SUPPORTED_FILE_COLS[f] + ":" + val);
			        			client.insertFileMetaLink(fileId, valId);
			        		}
			        	}
			        }
			        
					//commit
					client.endTransation();
					System.out.println("\n");
					line = in.readLine();
					
				}
				
			}finally{
				in.close();
				if(out != null){
					out.close();
				}
			}

	    }finally {
	    	client.close();
	    }
	}

	static Logger getLogger() {
		return logger;
	}

}
