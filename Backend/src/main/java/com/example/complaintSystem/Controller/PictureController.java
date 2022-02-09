package com.example.complaintSystem.Controller;

import com.example.complaintSystem.dto.PictureDto;
import com.example.complaintSystem.service.PicturesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/getComplaintPictures/{complaintId}")
    public ResponseEntity<List<PictureDto>> getComplaintPictures(@PathVariable("complaintId") long complaintId){

        return  ResponseEntity.ok().body( picturesService.getComplaintPictures(complaintId) );
    }
    @GetMapping("/getPicturesCount")
    public ResponseEntity<Long> getPicturesCount() {

        return ResponseEntity.ok().body( picturesService.getPicturesCount());

    }
    }
