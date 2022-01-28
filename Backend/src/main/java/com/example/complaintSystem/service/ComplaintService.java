package com.example.complaintSystem.service;

import com.example.complaintSystem.Repository.ComplaintRepository;
import org.springframework.stereotype.Service;

@Service
public class ComplaintService {



    ComplaintRepository complaintRepository;

    public  ComplaintService( ComplaintRepository complaintRepository){
        this.complaintRepository=complaintRepository;
    }



    public void updateComplaint(long complaintId){

        complaintRepository.incrementComplaintResolutionCounter(complaintId);
    }
}
