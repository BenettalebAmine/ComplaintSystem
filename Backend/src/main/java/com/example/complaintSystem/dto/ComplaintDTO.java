package com.example.complaintSystem.dto;

import com.example.complaintSystem.model.Complaint;
import com.example.complaintSystem.model.Util.Picture;

public class ComplaintDTO {

    Complaint complaint;
    Picture picture;

    public ComplaintDTO(Complaint complaint, Picture picture) {
        this.complaint = complaint;
        this.picture = picture;
    }

    public Complaint getComplaint() {
        return complaint;
    }

    public Picture getPicture() {
        return picture;
    }


}
