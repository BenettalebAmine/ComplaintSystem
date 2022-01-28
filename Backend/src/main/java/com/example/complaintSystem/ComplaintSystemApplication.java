package com.example.complaintSystem;

import com.example.complaintSystem.Model.Complaint;
import com.example.complaintSystem.Model.Util.ComplaintType;
import com.example.complaintSystem.Repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.util.Date;

@SpringBootApplication
public class ComplaintSystemApplication implements CommandLineRunner {

    @Autowired
    private ComplaintRepository complaintRepository;


    public static void main(String[] args) {

        SpringApplication.run(ComplaintSystemApplication.class, args);

    }

    @Override
    public void run(String... args) throws Exception {
      /*  Complaint complaint=new Complaint(LocalDateTime.now(), ComplaintType.DECHETS,false,0,0,0,0);

       complaintRepository.save(complaint);*/
    }

}
