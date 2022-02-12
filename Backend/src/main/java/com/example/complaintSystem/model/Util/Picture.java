package com.example.complaintSystem.model.Util;

import com.example.complaintSystem.model.Complaint;
import java.time.LocalDateTime;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Pictures")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Picture {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column private LocalDateTime date;

  @ManyToOne()
  @JoinColumn(name = "Complaint_id")
  private Complaint complaint;

  @Column(length=10485760)
  private String data;

  @Column private boolean status;

  @Column private String deviceId;

  public Picture(
      LocalDateTime date, Complaint complaint, String data, boolean status, String deviceId) {
    this.date = date;
    this.complaint = complaint;
    this.data = data;
    this.status = status;
    this.deviceId = deviceId;
  }
}
