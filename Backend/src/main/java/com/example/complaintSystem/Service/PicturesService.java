package com.example.complaintSystem.service;

import com.example.complaintSystem.Model.Complaint;
import com.example.complaintSystem.Model.Util.Picture;
import com.example.complaintSystem.Repository.PictureRepository;
import com.example.complaintSystem.dto.PictureDto;
import com.example.complaintSystem.mapper.ModelToDtoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PicturesService {

    @Autowired
    private PictureRepository pictureRepository;
    @Autowired
    private com.example.complaintSystem.service.ComplaintService complaintService;

    public void UpdatePicture(long id,boolean status){
        Picture pic = pictureRepository.getById(id);
        pic.setStatus(status);
        pictureRepository.save(pic);
    }

    public List<PictureDto> getComplaintPictures(long complaintId) {
       Optional<Complaint>  complaint= complaintService.findById(complaintId);
        return complaint.map(value -> ModelToDtoMapper.mapAllToPictureDto(pictureRepository.findByComplaint(value))).orElse(null);
    }

    public long getPicturesCount() {

        return pictureRepository.count();
    }
}
