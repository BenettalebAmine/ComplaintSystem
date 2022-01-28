package com.example.complaintSystem.Controller;


import com.example.complaintSystem.service.ComplaintService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ComplaintController {


    ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService){
        this.complaintService=complaintService;
    }



    @PutMapping("/updateComplaint/{complaintId}")
    public ResponseEntity<String> updateComplaint(@PathVariable(name = "complaintId") long complaintId){

        complaintService.updateComplaint(complaintId);
        return ResponseEntity.ok("Complaint Updated successfully");
    }
}
