package org.imirsel.nema.model;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;


public class NemaSubmission {
	
	public static final String SUBMISSION_CODE = "submission_code";
    public static final String SUBMISSION_NAME = "submission_name";
    public static final String CONTRIBUTORS = "contributors";
    public static final String ABSTRACT_URL = "abstract_url";
    
	private String submissionCode;
	private String submissionName;
	private List<NemaContributor> contributors;
	private String abstractUrl;
	private Properties props;
	
	public NemaSubmission(String submissionCode, String submissionName,
			List<NemaContributor> contributors, String abstractUrl) {
		this.submissionCode = submissionCode;
		this.submissionName = submissionName;
		this.contributors = contributors;
		this.abstractUrl = abstractUrl;
	}
	
	public NemaSubmission(File propsFile) {
		props = new Properties();        
        try {
            InputStream iStream = new FileInputStream(propsFile);
            if(iStream != null) {
                props.load(iStream);
            }else {
               throw new RuntimeException("File " + propsFile.getAbsolutePath() + " not found");
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        this.submissionCode = getProperty(SUBMISSION_CODE);
        this.submissionName = getProperty(SUBMISSION_NAME);
        this.abstractUrl = getProperty(ABSTRACT_URL);
        String contribs = getProperty(CONTRIBUTORS);
        String[] comps = contribs.split("\\|");
        List<NemaContributor> contribList = new ArrayList<NemaContributor>(comps.length);
        for (int i = 0; i < comps.length; i++) {
        	System.out.println(comps[i]);
    		contribList.add(NemaContributor.fromString(comps[i].trim()));
		}
        this.contributors = contribList;
	}
	
	public String getSubmissionCode() {
		return submissionCode;
	}
	public void setSubmissionCode(String submissionCode) {
		this.submissionCode = submissionCode;
	}
	public String getSubmissionName() {
		return submissionName;
	}
	public void setSubmissionName(String submissionName) {
		this.submissionName = submissionName;
	}
	public List<NemaContributor> getContributors() {
		return contributors;
	}
	public void setContributors(List<NemaContributor> contributors) {
		this.contributors = contributors;
	}
	public String getAbstractUrl() {
		return abstractUrl;
	}
	public void setAbstractUrl(String abstractUrl) {
		this.abstractUrl = abstractUrl;
	}
	
	private String getProperty(String name){
    	String val = props.getProperty(name);
    	return val;
    }
	
	public void toPropertiesFile(File theFile) {		
		try {
			props = new Properties();
			props.setProperty(SUBMISSION_CODE, submissionCode);
			props.setProperty(SUBMISSION_NAME, submissionName);			
			props.setProperty(ABSTRACT_URL, abstractUrl);
			
			String contributorsString = contributors.get(0).toString();
			if (contributors.size() > 1) {
				for(int i =1; i < contributors.size(); i++){
					contributorsString = contributorsString + "|" + contributors.get(i).toString();
				}
			}
			props.setProperty(CONTRIBUTORS, contributorsString);

			FileOutputStream fileOut = new FileOutputStream(theFile);
			String commentString = "Submission Details for: " + submissionCode;
			props.store(fileOut, commentString);
			fileOut.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
}
