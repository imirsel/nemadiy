package org.imirsel.nema.analytics.evaluation;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.imirsel.nema.analytics.evaluation.resultpages.Table;
import org.imirsel.nema.model.NemaData;

import org.imirsel.nema.model.NemaDataset;
import org.imirsel.nema.model.NemaTask;
import org.imirsel.nema.model.NemaTrackList;

/**
 * Utility class for preparing tables and writing CSV results files from 
 * collections of NEMA model classes representing the results and experiment 
 * details.
 * 
 * @author kris.west@gmail.com
 * @since 0.2.0
 */
public class WriteCsvResultFiles {

	public static final DecimalFormat DEC = new DecimalFormat("0.0000");
    
	/**
	 * Prepares a Table Object that encodes the description of the specified task. To be
	 * used to construct introduction pages for the results.
	 * 
	 * @param task The task description to encode.
	 * @return The prepared Table.
	 */
	public static Table prepTaskTable(NemaTask task, NemaDataset dataset) {
	    String[] colNames = new String[2];
	    colNames[0] = "Field";
	    colNames[1] = "Value";
	
	    DecimalFormat dec = new DecimalFormat();
	    dec.setMaximumFractionDigits(2);
	
	    List<String[]> rows = new ArrayList<String[]>();
	    
	    rows.add(new String[]{"Task ID",""+task.getId()});
	    rows.add(new String[]{"Task Name",""+task.getName()});
	    rows.add(new String[]{"Task Description",""+task.getDescription()});
	    rows.add(new String[]{"Subject Metadata ID",""+task.getSubjectTrackMetadataId()});
	    rows.add(new String[]{"Subject Metadata Name",""+task.getSubjectTrackMetadataName()});
	    
	    
	    rows.add(new String[]{"Dataset ID","" + dataset.getId()});
	    rows.add(new String[]{"Dataset Name",""+dataset.getName()});
	    rows.add(new String[]{"Dataset Description",""+dataset.getDescription()});
	    
	    return new Table(colNames, rows);
	}
	
	/**
	 * Prepares a Table Object that encodes the overall evaluation metrics for
	 * the specified overall evaluation Objects.
	 * 
	 * @param jobIdToOverallEval Map of job Id to overall evaluation results
	 * encode as a NemaData Object.
	 * @param jobIdToName Map of Job Id to Job name.
	 * @param metricKeys A List of the String metadata keys to use in the table.
	 * @return The prepared Table.
	 */
	public static Table prepSummaryTable(
			Map<String,NemaData> jobIdToOverallEval, 
			Map<String,String> jobIdToName,
			List<String> metricKeys
		) {

    	// create the table
		int numMetrics = metricKeys.size();
        String[] colNames = new String[1+numMetrics];
        colNames[0] = "Algorithm";
        for (int i = 0; i < numMetrics; i++) {
        	colNames[i+1] = metricKeys.get(i);
		}
        
        List<String[]> rows = new ArrayList<String[]>();
        
        NemaData eval;
		String jobId;
		String jobName;
        for (Iterator<String> it = jobIdToOverallEval.keySet().iterator();it.hasNext();) {
        	jobId = it.next();
        	jobName = jobIdToName.get(jobId);
        	eval = jobIdToOverallEval.get(jobId);
        	String[] row = new String[6];
        	row[0] = jobName;
        	for (int i = 0; i < numMetrics; i++) {
        		row[i+1] = DEC.format(eval.getDoubleMetadata(metricKeys.get(i)));
        	}
            rows.add(row);
        }

        return new Table(colNames, rows);
    }
	
	/**
	 * Prepares a Table Object representing the specified evaluation metadata, 
     * where the systems are the columns of the table and the rows are the 
     * different tracks in the evaluation.
     *
	 * @param testSets An ordered list of the test sets.
	 * @param jobIDToTrackEval Map of job ID to a Map of test set to a List of 
	 * Track prediction/results Objects for a particular fold of the experiment.
	 * @param jobIDToName Map of job ID to job name.
	 * @param metricKey The String key of teh metric to write out.
	 * @return The prepared Table.
	 */
    public static Table prepTableDataOverTracksAndSystems(
    		List<NemaTrackList> testSets, 
    		Map<String,Map<NemaTrackList,List<NemaData>>> jobIDToTrackEval, 
    		Map<String,String> jobIDToName, 
    		String metricKey
    	) {
    	//sort systems alphabetically
    	int numAlgos = jobIDToName.size();
    	String[][] jobIDandName = new String[numAlgos][];
    	int idx=0;
    	String id;
    	for(Iterator<String> it = jobIDToName.keySet().iterator();it.hasNext();){
    		id = it.next();
    		jobIDandName[idx++] = new String[]{id, jobIDToName.get(id)};
    	}
    	Arrays.sort(jobIDandName, new Comparator<String[]>(){
    		public int compare(String[] a, String[] b){
    			return a[1].compareTo(b[1]);
    		}
    	});
    	
    	//set column names
    	int numCols = numAlgos + 2;
        String[] colNames = new String[numCols];
        colNames[0] = "Fold";
        colNames[1] = "Track";
        for (int i = 0; i < numAlgos; i++) {
            colNames[i+2] = jobIDandName[i][1];
        }

        //count number of rows to produce
        int numTracks = 0;
        String firstJob = jobIDandName[0][0];
        {
	        Map<NemaTrackList,List<NemaData>> firstResList = jobIDToTrackEval.get(firstJob);
	        for (Iterator<List<NemaData>> iterator = firstResList.values().iterator(); iterator.hasNext();) {
				List<NemaData> list = iterator.next();
				numTracks += list.size();
			}
        }
        
        //produce rows (assume but check that results are ordered the same for each system)
        List<String[]> rows = new ArrayList<String[]>();
        int foldNum = 0;
        NemaTrackList foldList = testSets.get(foldNum);
        int foldTrackCount = 0;
        int actualRowCount = 0;
        String[] row;
        Map<NemaTrackList,List<NemaData>> firstResList;
        NemaData data;
        firstResList = jobIDToTrackEval.get(firstJob);
    	while(actualRowCount < numTracks){
        	if (foldTrackCount == firstResList.get(foldList).size()){
        		foldNum++;
        		foldList  = testSets.get(foldNum);
        		foldTrackCount = 0;
        	}
        	
        	row = new String[numCols];
        	row[0] = "" + foldList.getFoldNumber();
        	row[1] = firstResList.get(foldList).get(foldTrackCount).getId();
        	for(int i=0;i<numAlgos;i++){
	        		data = jobIDToTrackEval.get(jobIDandName[i][0]).get(foldList).get(foldTrackCount);

	        		if (!data.getId().equals(row[1])){
	        			throw new IllegalArgumentException("Results from job ID: " + jobIDandName[i][0] + " are not ordered the same as results from job ID: " + firstJob);
	        		}
	        		row[i+2] = "" + DEC.format(data.getDoubleMetadata(metricKey));
        	}
        	rows.add(row);

        	actualRowCount++;
        	foldTrackCount++;
        }
        
        return new Table(colNames, rows);
    }
    
    /**
     * Prepares a Table Object representing the specified evaluation metadata, where the systems are the columns
     * of the table and the rows are the different tracks in the evaluation.
     * 
     * @param testSets  An ordered list of the test sets.
	 * @param jobIDToFoldEval Map of job ID to a Map of test set to the 
	 * evaluation results for that particular fold of the experiment, encoded
	 * as a NemaData Object.
	 * @param jobIDToName Map of job ID to job name.
	 * @param metricKey The String key of the metric to write out.
	 * @return The prepared Table.
     */
    public static Table prepTableDataOverFoldsAndSystems(
    		List<NemaTrackList> testSets, 
    		Map<String, Map<NemaTrackList,NemaData>> jobIDToFoldEval, 
    		Map<String,String> jobIDToName, 
    		String metricKey
    	) {
    	//sort systems alphabetically
    	int numAlgos = jobIDToName.size();
    	String[][] jobIDandName = new String[numAlgos][];
    	int idx=0;
    	String id;
    	for(Iterator<String> it = jobIDToName.keySet().iterator();it.hasNext();){
    		id = it.next();
    		jobIDandName[idx++] = new String[]{id, jobIDToName.get(id)};
    	}
    	Arrays.sort(jobIDandName, new Comparator<String[]>(){
    		public int compare(String[] a, String[] b){
    			return a[1].compareTo(b[1]);
    		}
    	});
    	
    	//set column names
    	int numCols = numAlgos + 1;
        String[] colNames = new String[numCols];
        colNames[0] = "Fold";
        for (int i = 0; i < numAlgos; i++) {
            colNames[i+1] = jobIDandName[i][1];
        }

        //count number of rows to produce
        int numFolds = jobIDToFoldEval.get(jobIDandName[0][0]).size();
        
        
        //produce rows (assume but check that results are ordered the same for each system)
        List<String[]> rows = new ArrayList<String[]>();
        int fold = 0;
        String[] row;
        NemaData data;
        for(int f=0;f<numFolds;f++){
        	NemaTrackList foldList = testSets.get(fold);
            row = new String[numCols];
        	row[0] = "" + fold;
        	for(int i=0;i<numAlgos;i++){
        		data = jobIDToFoldEval.get(jobIDandName[i][0]).get(foldList);
        		row[i+1] = "" + DEC.format(data.getDoubleMetadata(metricKey));
        	}
        	rows.add(row);
        }
        
        return new Table(colNames, rows);
    }
    
    /**
     * Prepares a Table Object representing the specified evaluation metadata, 
     * where the metrics are the columns of the table and the rows are the 
     * different tracks in the evaluation.
     * 
     * @param testSets  An ordered list of the test sets.
     * @param trackEval Map of test set to a List of Track prediction/results 
     * Objects for a particular fold of the experiment.
	 * @param metricKey The String key of the metric to write out.
	 * @return The prepared Table.
     */
    public static Table prepTableDataOverTracks(List<NemaTrackList> testSets, Map<NemaTrackList,List<NemaData>> trackEval, List<String> metricKeys) {
    	//set column names
    	int numMetrics = metricKeys.size();
    	int numCols = numMetrics + 2;
        String[] colNames = new String[numCols];
        colNames[0] = "Fold";
        colNames[1] = "Track";
        for (int i = 0; i < numMetrics; i++) {
            colNames[i+2] = metricKeys.get(i);
        }

        //count number of rows to produce
        int numTracks = 0;
        for (Iterator<List<NemaData>> iterator = trackEval.values().iterator(); iterator.hasNext();) {
			List<NemaData> list = iterator.next();
			numTracks += list.size();
		}
        
        
        //produce rows (assume but check that results are ordered the same for each system)
        List<String[]> rows = new ArrayList<String[]>();
        int foldNum = 0;
        NemaTrackList foldList = testSets.get(foldNum);
        int foldTrackCount = 0;
        int actualRowCount = 0;
        String[] row;
        NemaData data;
        while(actualRowCount < numTracks){
        	if (foldTrackCount == trackEval.get(foldList).size()){
        		foldNum++;
        		foldList = testSets.get(foldNum);
        		foldTrackCount = 0;
        	}
        	row = new String[numCols];
        	row[0] = "" + foldList.getFoldNumber();
        	row[1] = trackEval.get(foldList).get(foldTrackCount).getId();
        	for(int i=0;i<numMetrics;i++){
        		data = trackEval.get(foldList).get(foldTrackCount);
        		row[i+2] = "" + DEC.format(data.getDoubleMetadata(metricKeys.get(i)));
        	}
        	rows.add(row);

        	actualRowCount++;
        	foldTrackCount++;
        }
        
        return new Table(colNames, rows);
    }
    
    /**
     * Prepares a Table Object representing the specified evaluation metadata, where the metrics are the columns
     * of the table and the rows are the different tracks in the evaluation.
     * 
     * @param testSets An ordered list of the test sets.
     * @param foldEval Map of test set to the evaluation results for that 
     * particular fold of the experiment, encoded as a NemaData Object.
     * @param metricKey The String key of the metric to write out.
	 * @return The prepared Table.
     */
    public static Table prepTableDataOverFolds(List<NemaTrackList> testSets, Map<NemaTrackList, NemaData> foldEval, List<String> metricKeys) {
    	//set column names
    	int numMetrics = metricKeys.size();
    	int numCols = numMetrics + 1;
        String[] colNames = new String[numCols];
        colNames[0] = "Fold";
        for (int i = 0; i < numMetrics; i++) {
            colNames[i+1] = metricKeys.get(i);
        }

        //count number of rows to produce
        int numFolds = foldEval.size();
        
        //produce rows (assume but check that results are ordered the same for each system)
        List<String[]> rows = new ArrayList<String[]>();
        String[] row;
        NemaData data;
        for(int i=0;i<numFolds;i++){
        	row = new String[numCols];
        	row[0] = "" + i;
        	for(int m=0;m<numMetrics;m++){
        		data = foldEval.get(testSets.get(i));
        		row[m+1] = "" + DEC.format(data.getDoubleMetadata(metricKeys.get(m)));
        	}
        	rows.add(row);
        }
        
        return new Table(colNames, rows);
    }
	
	/**
	 * Writes a Table Object to a CSV file.
	 * 
	 * @param table Table to write.
	 * @param outputFile File to write to.
	 * @throws IOException
	 */
    public static void writeTableToCsv(Table table, File outputFile) throws IOException{
		int cols = table.getColHeaders().length;
				
		String csv = "*";
		for (int i = 0; i < cols; i++) {
			csv += table.getColHeaders()[i];
		    if (i<cols-1){
		    	csv += ",";
		    }
		}
		csv += "\n";
		
		List<String[]> rows = table.getRows();
		for (Iterator<String[]> iterator = rows.iterator(); iterator.hasNext();) {
			String[] row = iterator.next();
			for (int i = 0; i < cols; i++) {
		    	csv += row[i];
		        if (i<cols-1){
		        	csv += ",";
		        }
		    }
		    csv += "\n";
		}
		
		BufferedWriter output = null;
		try {
		    output = new BufferedWriter(new FileWriter(outputFile));
		    output.write(csv);
		}finally{
			try {
		    	if(output != null){
		    		output.flush();
		    		output.close();
		    	}
			} catch (IOException ex) {}
		}
    }

    /**
     * Prepares a Table Object representing the specified evaluation metadata, where the systems are the columns
     * of the table and the rows are the different classes of data in the evaluation.
     * 
     * @param jobIDToAggregateEval Map linking jobID to its overall evaluation data Object.
     * @param jobIDToName Map linking jobID to the Job name to use in the Table for each set of results.
     * @param classNames A list of the class names used.
     * @param metadataKey The evaluation metadata type to use. This method expects the metadata to point to
     * a 1 or 2 dimensional double array giving the accuracies or confusions for each class.
     * @return The prepared table.
     */
    public static Table prepTableDataOverClasses(Map<String,NemaData> jobIDToAggregateEval, Map<String,String> jobIDToName, List<String> classNames, String metadataKey) {
    	//sort systems alphabetically
    	int numAlgos = jobIDToName.size();
    	String[][] jobIDandName = new String[numAlgos][];
    	int idx=0;
    	String id;
    	for(Iterator<String> it = jobIDToName.keySet().iterator();it.hasNext();){
    		id = it.next();
    		jobIDandName[idx++] = new String[]{id, jobIDToName.get(id)};
    	}
    	Arrays.sort(jobIDandName, new Comparator<String[]>(){
    		public int compare(String[] a, String[] b){
    			return a[1].compareTo(b[1]);
    		}
    	});
    	
        String[] colNames = new String[numAlgos + 1];
        colNames[0] = "Class";
        for (int i = 0; i < numAlgos; i++) {
            colNames[i+1] = jobIDandName[i][1];
        }

        List<String[]> rows = new ArrayList<String[]>();
        
        for (int c = 0; c < classNames.size(); c++) {
            String[] row = new String[numAlgos + 1];
            row[0] = classNames.get(c).replaceAll(",", " ");

            for (int j = 0 ; j < numAlgos; j++){  
            	if (jobIDToAggregateEval.get(jobIDandName[j][0]).getMetadata(metadataKey).getClass().getComponentType().isArray()){
            		row[j+1] = DEC.format(100.0 * jobIDToAggregateEval.get(jobIDandName[j][0]).get2dDoubleArrayMetadata(metadataKey)[c][c]);
            	}else{
            		//discounted types are 1D as there is no residual confusion after discounting
            		row[j+1] = DEC.format(100.0 * jobIDToAggregateEval.get(jobIDandName[j][0]).getDoubleArrayMetadata(metadataKey)[c]);
            	}
            }
            rows.add(row);
        }
        return new Table(colNames, rows);
    }
}