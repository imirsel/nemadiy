package org.imirsel.nema.analytics.evaluation;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Handler;
import java.util.logging.Logger;


import org.imirsel.nema.analytics.util.io.NemaFileTypeImpl;
import org.imirsel.nema.model.NemaData;

/**
 * 
 * @author kris.west@gmail.com
 * @since 0.1.0
 */
public abstract class SingleTrackEvalFileTypeImpl extends NemaFileTypeImpl implements SingleTrackEvalFileType {

	public SingleTrackEvalFileTypeImpl(String typeName) {
		super(typeName);
	}
    
    public List<NemaData> readDirectory(File theDir, String extension)
			throws IllegalArgumentException, FileNotFoundException, IOException{
		
    	List<NemaData> out = new ArrayList<NemaData>();
    	ArrayList<File> filesToUse = new ArrayList<File>();
		if(theDir.isDirectory()) {
			File[] files = theDir.listFiles();
			
			getLogger().info("got " + files.length + " files for " + theDir.getAbsolutePath());
			
			if(extension == null){
				for (int i = 0; i < files.length; i++){
			        File file = files[i];
			        if (!file.isDirectory()){
			            filesToUse.add(file);
			        }
			    }
			}else{
				for (int i = 0; i < files.length; i++){
			        File file = files[i];
			        if (!file.isDirectory() && file.getName().endsWith(extension)){
			            filesToUse.add(file);
			        }
			    }
			}
			//this should sort results consistently across all submissions,
			//   if they use the same names for their results files 
			//   (otherwise there is no way to know if they are about the same test across different submissions)
			Collections.sort(filesToUse);
			
			for(Iterator<File> it = filesToUse.iterator();it.hasNext();){
				out.add(readFile(it.next()));
			}
			
			getLogger().info("Retrieved " + out.size() + " of " + files.length + " files from " + theDir.getAbsolutePath());
		}else {
			out.add(readFile(theDir));
		}
		
		return out;
	}
    
    public abstract NemaData readFile(File theFile)
		throws IllegalArgumentException, FileNotFoundException, IOException;
	
	public abstract void writeFile(File theFile, NemaData data)
		throws IllegalArgumentException, FileNotFoundException, IOException;

}
