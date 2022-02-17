package com.example.complaintSystem.dto;

import java.time.LocalDateTime;

public final class PictureDto {


    private final long id;

    private final LocalDateTime date;

    private final String data;

    private boolean status;

    private boolean isChecked;

    private final String deviceId;

    public PictureDto(long id, LocalDateTime date, String data, boolean status, boolean isChecked, String deviceId) {
        this.id = id;
        this.date = date;
        this.data = data;
        this.status = status;
        this.isChecked = isChecked;
        this.deviceId = deviceId;
    }

    public String getData() {
        return data;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public long getId() {
        return id;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public boolean isStatus() {
        return status;
    }

    public boolean isChecked() {
        return isChecked;
    }
}
