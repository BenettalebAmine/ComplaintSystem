package com.example.complaintSystem.Controller;

import com.example.complaintSystem.service.PicturesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@CrossOrigin
public class PictureController {

    @Autowired
    PicturesService picturesService;

    @PutMapping("/UpdatePictureStatus")
    public void UpdatePicture(@RequestParam Long id,@RequestParam boolean status){
        picturesService.UpdatePicture(id,status);
    }
}
