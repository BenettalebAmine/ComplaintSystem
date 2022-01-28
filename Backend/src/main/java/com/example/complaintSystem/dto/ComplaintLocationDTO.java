package com.example.complaintSystem.dto;



public final class ComplaintLocationDTO {

    private long latitude;
    private long longitude;

    public ComplaintLocationDTO(long latitude, long longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public long getLatitude() {
        return latitude;
    }

    public long getLongitude() {
        return longitude;
    }
}
