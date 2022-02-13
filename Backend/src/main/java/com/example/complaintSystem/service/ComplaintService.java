package com.example.complaintSystem.service;

import com.example.complaintSystem.dto.ComplaintDTO;
import com.example.complaintSystem.model.Complaint;
import com.example.complaintSystem.model.Util.Picture;
import com.example.complaintSystem.repository.ComplaintRepository;
import com.example.complaintSystem.dto.ComplaintLocationDTO;
import com.example.complaintSystem.mapper.ModelToDtoMapper;
import com.example.complaintSystem.repository.PictureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComplaintService {



    ComplaintRepository complaintRepository;
    PictureRepository pictureRepository;

    protected Optional<Complaint> findById(long complaintId){ return  complaintRepository.findById(complaintId);}

    public  ComplaintService( ComplaintRepository complaintRepository){
        this.complaintRepository=complaintRepository;
    }



    public void addComplaint(ComplaintDTO complaintDTO){


        Optional<Complaint> optionalComplaint= complaintRepository.getomplaintByLocation(complaintDTO.getComplaint().getLatitude(),complaintDTO.getComplaint().getLongitude());

        Picture pic=complaintDTO.getPicture();;
        Complaint c=complaintDTO.getComplaint();
        if(optionalComplaint.isEmpty()){

            complaintRepository.save(c);
            pic.setComplaint(c);
            pictureRepository.save(pic);
            return;
        }
            pic.setComplaint(c);
            pictureRepository.save(pic);

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
