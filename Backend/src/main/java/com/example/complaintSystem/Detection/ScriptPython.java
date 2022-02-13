package com.example.complaintSystem.Detection;

import java.io.*;
import java.nio.charset.StandardCharsets;

public class ScriptPython {
    static Process mProcess;

    public static void runScript() {
        Process process;
        try {
            process = Runtime.getRuntime().exec("python build_model.py");
            mProcess = process;
        } catch (Exception e) {
            System.out.println("Exception Raised" + e.toString());
        }
        InputStream stdout = mProcess.getInputStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(stdout, StandardCharsets.UTF_8));
        String accuracy;
        try {
            while ((accuracy = reader.readLine()) != null) {
                System.out.println("stdout: " + accuracy);
            }
        } catch (IOException e) {
            System.out.println("Exception in reading output" + e.toString());
        }
    }

    public static void main(String[] args) {
        runScript();
    }

}
