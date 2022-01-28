package com.example.complaintSystem.Controller;


import com.example.complaintSystem.Model.Complaint;
import com.example.complaintSystem.dto.ComplaintLocationDTO;
import com.example.complaintSystem.dto.PictureDto;
import com.example.complaintSystem.service.ComplaintService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @GetMapping("/getAllComplaintsLocation")
    public ResponseEntity<List<ComplaintLocationDTO>> getAllComplaintsLocation(){

        return  ResponseEntity.ok().body(complaintService.getAllComplaintsLocation()) ;
    }

    @GetMapping("/getAllComplaints")
    public ResponseEntity<List<Complaint>> getAllComplaints(){

        return  ResponseEntity.ok().body(complaintService.getAllComplaints()) ;
    }
    @GetMapping("/getComplaint/{complaintId}")
    public ResponseEntity<Complaint> getAllComplaints(@PathVariable("complaintId") long complaintId){

        return  ResponseEntity.ok().body(complaintService.getComplaint(complaintId)) ;
    }
}
