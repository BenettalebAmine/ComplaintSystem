package com.example.complaintSystem.mapper;

import com.example.complaintSystem.Model.Complaint;
import com.example.complaintSystem.dto.ComplaintLocationDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ModelToDtoMapper {





    public  static List<ComplaintLocationDTO> mapAllToComplaintLocationDTO(List<Complaint> complaintList){

        List<ComplaintLocationDTO> complaintLocationDTOList;

        complaintLocationDTOList=
                complaintList
                .stream()
                .map( complaint ->  new ComplaintLocationDTO(complaint.getLatitude(),complaint.getLongitude()) )
                .collect(Collectors.toList());

        return  complaintLocationDTOList;
    }
}
