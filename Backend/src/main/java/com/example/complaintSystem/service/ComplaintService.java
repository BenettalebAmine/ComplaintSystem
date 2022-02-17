package com.example.complaintSystem.service;

import com.example.complaintSystem.dto.ComplaintDTO;
import com.example.complaintSystem.model.Complaint;
import com.example.complaintSystem.model.Util.Picture;
import com.example.complaintSystem.repository.ComplaintRepository;
import com.example.complaintSystem.dto.ComplaintLocationDTO;
import com.example.complaintSystem.mapper.ModelToDtoMapper;
import com.example.complaintSystem.repository.PictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ComplaintService {


    ComplaintRepository complaintRepository;
    @Autowired
    PictureRepository pictureRepository;

    protected Optional<Complaint> findById(long complaintId){ return  complaintRepository.findById(complaintId);}

    public  ComplaintService( ComplaintRepository complaintRepository){
        this.complaintRepository=complaintRepository;
    }



    public void addComplaint(ComplaintDTO complaintDTO){


        Optional<Complaint> optionalComplaint= complaintRepository.getomplaintByLocation(complaintDTO.getComplaint().getLatitude(),complaintDTO.getComplaint().getLongitude());
//        System.out.println(optionalComplaint.get());

        Picture pic=complaintDTO.getPicture();;

        System.out.println(pic);
        Complaint c=complaintDTO.getComplaint();
        if(optionalComplaint.isEmpty()){

            c = complaintRepository.save(c);
            pic.setComplaint(c);
            pictureRepository.save(pic);
            return;
        }
//        complaintRepository.incrementComplaintCounter(optionalComplaint.get().getId());
        pic.setComplaint(optionalComplaint.get());
        pictureRepository.save(pic);

    }

    public void updateComplaint(long complaintId){

        complaintRepository.incrementComplaintResolutionCounter(complaintId);
        Complaint complaint = complaintRepository.getById(complaintId);
        if(complaint.getComplaintCounter()==0) return;
        complaint.setStatus(complaint.getComplaintResolutionCounter() / (float) complaint.getComplaintCounter() >= 0.5);
        System.out.println(complaint.isStatus());
        complaintRepository.save(complaint);
    }

    public List<ComplaintLocationDTO> getAllComplaintsLocation() {

        return ModelToDtoMapper.mapAllToComplaintLocationDTO(complaintRepository.findAllValid()) ;
    }


    public List<Complaint> getAllComplaints() {
       return complaintRepository.findAll();
    }
    public Complaint getComplaint(long complaintId) {
        return complaintRepository.findById(complaintId).orElse(null);
    }

    public List<ComplaintDTO> getComplaintsByDeviceId(String deviceId) {
        List<Picture> pictures = pictureRepository.findAllByDeviceId(deviceId);
        List<ComplaintDTO> result = new ArrayList<>();
        for (Picture picture: pictures) {
            result.add(new ComplaintDTO(picture.getComplaint(), picture));
        }
        return result;
    }
}
