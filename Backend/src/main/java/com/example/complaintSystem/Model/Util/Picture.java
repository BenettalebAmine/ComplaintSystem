package com.example.complaintSystem.Model.Util;

import com.example.complaintSystem.Model.Complaint;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Pictures")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Picture {
    @Id
    @Column(name = "id", nullable = false)
    private long id;

    @Column
    private LocalDateTime date;

    @ManyToOne()
    @JoinColumn(name = "Complaint_id")
    private Complaint complaint;

    @Column
    private Byte[] data;

    @Column
    private boolean status;

    @Column
    private String deviceId;

    public Picture(LocalDateTime date, Complaint complaint, Byte[] data, boolean status, String deviceId) {
        this.date = date;
        this.complaint = complaint;
        this.data = data;
        this.status = status;
        this.deviceId = deviceId;
    }
}
