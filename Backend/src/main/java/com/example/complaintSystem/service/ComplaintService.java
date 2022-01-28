package com.example.complaintSystem.service;

import com.example.complaintSystem.Repository.ComplaintRepository;
import com.example.complaintSystem.dto.ComplaintLocationDTO;
import com.example.complaintSystem.mapper.ModelToDtoMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintService {



    ComplaintRepository complaintRepository;

    public  ComplaintService( ComplaintRepository complaintRepository){
        this.complaintRepository=complaintRepository;
    }



    public void updateComplaint(long complaintId){

        complaintRepository.incrementComplaintResolutionCounter(complaintId);
    }

    public List<ComplaintLocationDTO> getAllComplaintsLocation() {

        return ModelToDtoMapper.mapAllToComplaintLocationDTO(complaintRepository.findAll()) ;
    }
}
