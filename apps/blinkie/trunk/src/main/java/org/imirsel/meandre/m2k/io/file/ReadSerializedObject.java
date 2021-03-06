package org.imirsel.meandre.m2k.io.file;

import java.io.ObjectInputStream;
import java.io.FileInputStream;
import java.io.File;
import java.io.IOException;
import java.io.FileNotFoundException;
import java.io.StreamCorruptedException;
import java.io.InvalidClassException;
import org.meandre.annotations.Component;
import org.meandre.core.ExecutableComponent;
import org.meandre.annotations.ComponentOutput;
import org.meandre.annotations.ComponentInput;
import org.meandre.annotations.ComponentProperty;

import org.meandre.core.ComponentContextProperties;
import org.meandre.core.ComponentContext;
import org.meandre.core.ComponentContextException;
import org.meandre.core.ComponentExecutionException;
import org.imirsel.m2k.modelling.weka.functions.WekaSMOClassifier;

import java.util.Vector;
/**
 * This module reads a Serialized object in, and outputs it.
 *
 * @author Kris West @ Sun Labs
 * Modified by Lily Dong on Feb. 27, 2008
 */

@Component(creator="Kris West",
           description="read in a serialized object and output it",
           name="ReadSerializedObject",
           tags="serialization")

public class ReadSerializedObject implements ExecutableComponent {
    @ComponentInput(description="model names",
                    name="modelNames")
    final static String DATA_INPUT = "modelNames";

    @ComponentOutput(description="the object read-in from the file(object)",
                     name="outputObjects")
    final static String DATA_OUTPUT = "outputObjects";

    /** Indicates whether the module has run.*/
    private boolean hasRun = false;
    /** Path and name of the file to read from */
    private Vector modelNames = new Vector();

    /**
     * Performs operations at the beginning of itinerary execution.
     *
     * @see #dispose
     */

    public void initialize() {
        hasRun = false;
    }
    public void initialize(ComponentContextProperties ccp) {
        hasRun = false;
    }

    /**
     * Performs operations at the end of itinerary execution.
     *
     * @see #initialize
     */
    public void dispose() {
        hasRun = false;
    }
    public void dispose(ComponentContextProperties ccp) {
        hasRun = false;
    }

    /**
     * This module takes an object in, serializes it and writes it to a file
     * (specified as a parameter). Subsequent objects will overwrite the same file.
     */
    public void execute(ComponentContext cc)
            throws ComponentExecutionException, ComponentContextException {
        System.out.println("\nReadSerializedObject");

        //for seasr only
        modelNames = (Vector)cc.getDataComponentFromInput(DATA_INPUT);
        Vector theObs = new Vector();
        for(int i=0; i<modelNames.size(); i++) {
            String modelName = (String)modelNames.elementAt(i);
            System.out.println("ReadSerializedObject:modelName="+modelName);
            File inputFile = new File(modelName);
            if (!inputFile.exists()) {
                throw new RuntimeException("The file set as a parameter does not exist!\nFile: " + inputFile.getAbsolutePath());
            }
            if(!inputFile.canRead()) {
                throw new RuntimeException("Unable to read from file: " + inputFile.getAbsolutePath());
            }
            FileInputStream fin;
            try {
                fin = new FileInputStream(inputFile);
            } catch(FileNotFoundException fnf) {
                throw new RuntimeException("File could not be opened for reading,\n either file exists but is a directory rather than a regular file, does not exist, or cannot be opened for some other reason.",fnf);
            }
            ObjectInputStream in;
            try {
                in = new ObjectInputStream(fin);
            } catch(IOException ioe) {
                throw new RuntimeException("I/O error occured while reading stream header",ioe);
            }
            Object theOb;
            try {
                theOb = in.readObject();
                theObs.add(theOb);
            } catch(ClassNotFoundException cnf) {
                throw new RuntimeException("The class of the Serialized Object could not be found!",cnf);
            } catch(InvalidClassException ice) {
                throw new RuntimeException("Something is wrong with a class used by Serialization (wrong JRE version?)!",ice);
            } catch(StreamCorruptedException sce) {
                throw new RuntimeException("Control information in the stream is inconsistent!", sce);
            } catch(IOException ioe) {
                throw new RuntimeException("I/O error occured while reading in Object",ioe);
            }

        }
        cc.pushDataComponentToOutput(DATA_OUTPUT, theObs);
    }
}
