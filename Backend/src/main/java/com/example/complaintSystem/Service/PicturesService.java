package com.example.complaintSystem.service;

import com.example.complaintSystem.Model.Util.Picture;
import com.example.complaintSystem.Repository.PictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PicturesService {

    @Autowired
    private PictureRepository pictureRepository;

    public void UpdatePicture(long id,boolean status){
        Picture pic = pictureRepository.getById(id);
        pic.setStatus(status);
        pictureRepository.save(pic);
    }
}
