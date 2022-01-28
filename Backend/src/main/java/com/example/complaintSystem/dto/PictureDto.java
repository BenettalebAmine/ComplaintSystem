package com.example.complaintSystem.dto;

import java.time.LocalDateTime;

public final class PictureDto {


    private final long id;

    private final LocalDateTime date;

    private final Byte[] data;

    private boolean status;

    private final String deviceId;

    public PictureDto(long id, LocalDateTime date, Byte[] data, boolean status, String deviceId) {
        this.id = id;
        this.date = date;
        this.data = data;
        this.status = status;
        this.deviceId = deviceId;
    }

    public Byte[] getData() {
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
}
