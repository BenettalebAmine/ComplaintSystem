package com.example.complaintSystem.mapper;

import com.example.complaintSystem.model.Complaint;
import com.example.complaintSystem.model.Util.Picture;
import com.example.complaintSystem.dto.ComplaintLocationDTO;
import com.example.complaintSystem.dto.PictureDto;

import java.util.List;
import java.util.stream.Collectors;

public class ModelToDtoMapper {





    public  static List<ComplaintLocationDTO> mapAllToComplaintLocationDTO(List<Complaint> complaintList){

        List<ComplaintLocationDTO> complaintLocationDTOList;

        complaintLocationDTOList=
                complaintList
                .stream()
                .map( complaint ->  new ComplaintLocationDTO(complaint.getLatitude(),complaint.getLongitude(),complaint.getComplaintType()) )
                .collect(Collectors.toList());

        return  complaintLocationDTOList;
    }

    public  static List<PictureDto> mapAllToPictureDto(List<Picture> pictures){

        List<PictureDto> pictureDtos;

        pictureDtos=
                pictures
                        .stream()
                        .map( picture ->  new PictureDto(picture.getId(),picture.getDate(),picture.getData(),picture.isStatus(), picture.isChecked(), picture.getDeviceId() ) )
                        .collect(Collectors.toList());

        return  pictureDtos;
    }
}
