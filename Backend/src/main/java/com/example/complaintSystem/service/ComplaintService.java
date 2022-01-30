package com.example.complaintSystem.service;

import com.example.complaintSystem.Model.Complaint;
import com.example.complaintSystem.Repository.ComplaintRepository;
import com.example.complaintSystem.dto.ComplaintLocationDTO;
import com.example.complaintSystem.dto.PictureDto;
import com.example.complaintSystem.mapper.ModelToDtoMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComplaintService {



    ComplaintRepository complaintRepository;

    protected Optional<Complaint> findById(long complaintId){ return  complaintRepository.findById(complaintId);}

    public  ComplaintService( ComplaintRepository complaintRepository){
        this.complaintRepository=complaintRepository;
    }



    public void addComplaint(Complaint complaint){

        complaintRepository.save(complaint);
    }

    public void updateComplaint(long complaintId){

        complaintRepository.incrementComplaintResolutionCounter(complaintId);
    }

    public List<ComplaintLocationDTO> getAllComplaintsLocation() {

        return ModelToDtoMapper.mapAllToComplaintLocationDTO(complaintRepository.findAll()) ;
    }


    public List<Complaint> getAllComplaints() {
       return complaintRepository.findAll();
    }
    public Complaint getComplaint(long complaintId) {
        return complaintRepository.findById(complaintId).orElse(null);
    }
}
