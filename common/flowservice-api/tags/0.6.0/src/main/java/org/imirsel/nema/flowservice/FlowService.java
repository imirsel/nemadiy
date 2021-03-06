package org.imirsel.nema.flowservice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.imirsel.nema.flowservice.config.MeandreServerProxyConfig;
import org.imirsel.nema.flowservice.config.MeandreServerProxyStatus;
import org.imirsel.nema.model.Component;
import org.imirsel.nema.model.Flow;
import org.imirsel.nema.model.Job;
import org.imirsel.nema.model.Notification;
import org.imirsel.nema.model.Property;


/**
 * Provides operations for executing {@link Flow}s and monitoring {@link Job}s.
 *
 * @author shirk
 * @author kumaramit01
 * @since 0.4.0
 */
public interface FlowService {

   //~ Methods -----------------------------------------------------------------

	/**
	 * Kill a running {@link Job}.
	 * 
	 * @param jobId Unique ID of the {@link Job} to kill.
	 * @throws IllegalStateException if the {@link Job} is not running.
	 * @since 0.4.0
	 */
   public void abortJob(long jobId) throws IllegalStateException;

	/**
	 * Delete a {@link Job}, the flow instance that was executed, 
	 * and the results the {@link Job} produced.
	 * 
	 * @param jobId Unique ID of the {@link Job} to delete.
	 * @throws IllegalStateException if the {@link Job} is not finished.
	 * @since 0.4.0
	 */
   public void deleteJob(long jobId) throws IllegalStateException;

	/**
	 * Execute a {@link Job} using the specified {@link Flow} instance on 
	 * behalf of the specified user.
	 * 
	 * @param token A unique identifier for the {@link Job}.
	 * @param name User supplied name for the job.
	 * @param description User supplied description for the job.
	 * @param flowInstanceId Unique ID of the {@link Flow} instance to execute.
	 * @param userId Unique ID of the user on whose behalf the {@link Job} 
	 * will be executed.
	 * @param userEmail Email address for the user where notifications about 
	 * {@link Job} status changes should be sent.
	 * @return The {@link Job} instance that was created as a result of the
	 * new execution.
	 * @since 0.4.0
	 */
   public Job executeJob(
      String token, String name, String description, long flowInstanceId,
      long userId,
      String userEmail);

	/**
	 * Return all {@link Flow}s that are templates. Template {@link Flow}s are
	 * never changed.
	 * 
	 * @return All {@link Flow}s that are templates.
	 * @since 0.4.0
	 */
   public Set<Flow> getFlowTemplates();

	/**
	 * Return the details of a job with the specified ID.
	 * 
	 * @param jobId The ID of the job to get details for.
	 * @return Job
	 */
   public Job getJob(long jobId);

	/**
	 * Return all {@link Job}s owned by the specified user.
	 * 
	 * @param userId Unique ID of the user whose {@link Job}s will be returned.
	 * @return List<Job> List of jobs
	 * @since 0.4.0
	 */
   public List<Job> getUserJobs(long userId);

	/**
	 * Return {@link Notification}s that have been sent to the specified user.
	 * 
	 * @param userId Unique ID of the user for whom {@link Notification}s 
	 * should be returned.
	 * @return List<Notification> List of notifications
	 * @since 0.4.0
	 */
   public List<Notification> getUserNotifications(long userId);

	/**
	 * Persist the specified {@link Flow} instance.
	 * 
	 * @param instance The {@link Flow} instance that should be stored.
	 * @return The flow instance ID.
	 * @since 0.4.0
	 */
   public Long storeFlowInstance(Flow instance);
   
   /**
    * Return the {@link Flow} with the specified ID.
    * 
    * @param flowId ID of the {@link Flow} to return.
    * @return The {@link Flow} with the specified ID.
    * @since 0.4.0
    */
   public Flow getFlow(long flowId);
   
   
   /**
    * Return the configuration for the head server. The head server is the
    * Meandre server the flow service uses for management and storage of flows.
    * 
    * @return Config for the head server.
    * @since 0.6.0
    */
   public MeandreServerProxyConfig getHeadConfig();
   
   /**
    * Return the configurations for the worker servers. Worker servers perform
    * the actual execution of Meandre flows.
    * 
    * @return Set of worker server configurations.
    * @since 0.6.0
    */
   public Set<MeandreServerProxyConfig> getWorkerConfigs();
   
   /**
    * Return the status of the head server.
    * 
    * @return Status of the head server.
    * @since 0.6.0
    */
   public MeandreServerProxyStatus getHeadStatus();
   
   
   /**
    * Return the current status for all worker servers. The keys in the
    * returned map contain the specifics for each server (e.g. address, port)
    * and the values in the returned map contain the server status.
    * 
    * @return Map containing the current status for all worker servers.
    * @since 0.6.0
    */
   public Map<MeandreServerProxyConfig,MeandreServerProxyStatus> getWorkerStatus();
   
   /**
    * Return the current status for the specified server.
    * 
    * @return The current status for the specified server.
    * @since 0.6.0
    */
   public MeandreServerProxyStatus getWorkerStatus(String host, int port);
   
   /**
    * Return the console for the specified job.
    * 
    * @param job The job for which the console should be returned.
    * @return The output console that was printed while the job was running.
    * @since 0.5.0
    */
   public String getConsole(Job job);
   
   /**
    * Create a new flow using the flow at the specified URI as a template to
    * which the supplied parameters will be applied.
    * 
    * @param paramMap Map of flow parameter names to values. These parameters
    * will be applied to the template flow at the specified URI.
    * @param flowUri The URI of the flow to use as the template.
    * @param userId The ID of the user who is creating this flow.
    * @return The URI of the new flow.
    * @since 0.5.0
    */
   public String createNewFlow(HashMap<String,String> paramMap, String flowUri, long userId);

   /**
    * Return a map of component properties and their data types.
    * 
    * @param component The {@link Component} to get the property data types for.
    * @param flowUri The URI of the flow containing the component to get the data.
    * types for.
    * @return The Map of component names and properties.
    * @since 0.5.0
    */
   public Map<String, Property> getComponentPropertyDataType(Component component, String flowUri);

   /**
    * Return the {@link Component}s contained in the flow at the specified URI.
    * 
    * @param flowUri The URI of the flow for which components should be returned.
    * @return Components in the flow at the specified URL.
    * @since 0.5.0
    */
   public List<Component> getComponents(String flowUri);

   /** 
    * Remove the flow with the specified URI.
    * @param flowUri The URI of the flow to remove.
    * @return True if the flow was successfully removed.
    * @since 0.5.0
    */
   public boolean removeFlow(String flowUri);
		
   

}
