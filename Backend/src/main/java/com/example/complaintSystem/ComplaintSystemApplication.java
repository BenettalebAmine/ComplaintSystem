package com.example.complaintSystem;

import com.example.complaintSystem.repository.ComplaintRepository;
import com.example.complaintSystem.repository.PictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ComplaintSystemApplication implements CommandLineRunner {

    @Autowired
    private ComplaintRepository complaintRepository;
    @Autowired
    private PictureRepository pictureRepository;


    public static void main(String[] args) {

        SpringApplication.run(ComplaintSystemApplication.class, args);

    }

    @Override
    public void run(String... args) throws Exception {
    /*    Complaint complaint=new Complaint(LocalDateTime.now(), ComplaintType.DECHETS,false,0,0,0,0);

       complaintRepository.save(complaint);
        Picture picture1=new Picture( LocalDateTime.now(), complaint, new Byte[]{0,0,0,0,0,0,0,0,0}, false, "RND deviceId" );
        Picture picture2=new Picture( LocalDateTime.now(), complaint, new Byte[]{1,1,1,0,0,0,0,0,0}, false, "RND deviceId22" );
        pictureRepository.save(picture1);
        pictureRepository.save(picture2);
    */}

}
