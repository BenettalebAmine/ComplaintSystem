package com.example.complaintSystem.model;

import com.example.complaintSystem.model.Util.ComplaintType;
import java.time.LocalDateTime;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Complaints")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Complaint {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "Complaint_id")
  private long id;

  @Column(nullable = false)
  private LocalDateTime date;

  @Column(nullable = false)
  private ComplaintType complaintType;

  @Column(nullable = false)
  private boolean status;

  @Column(nullable = false)
  private int complaintCounter;

  @Column(nullable = false)
  private int complaintResolutionCounter;

  @Column(nullable = false)
  private double latitude;

  @Column(nullable = false)
  private double longitude;

  public Complaint(
      LocalDateTime date,
      ComplaintType complaintType,
      boolean status,
      int complaintCounter,
      int complaintResolutionCounter,
      long latitude,
      long longitude) {
    this.date = date;
    this.complaintType = complaintType;
    this.status = status;
    this.complaintCounter = complaintCounter;
    this.complaintResolutionCounter = complaintResolutionCounter;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
