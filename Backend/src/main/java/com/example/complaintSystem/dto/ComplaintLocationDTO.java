package com.example.complaintSystem.dto;


import com.example.complaintSystem.model.Util.ComplaintType;

public final class ComplaintLocationDTO {

    private double latitude;
    private double longitude;
    private ComplaintType complaintType;

    public ComplaintLocationDTO(double latitude, double longitude,ComplaintType complaintType) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.complaintType=complaintType;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public ComplaintType getComplaintType() {
        return complaintType;
    }
}
