package com.example.complaintSystem;

import com.example.complaintSystem.dto.ComplaintDTO;
import com.example.complaintSystem.model.Complaint;
import com.example.complaintSystem.model.Util.ComplaintType;
import com.example.complaintSystem.model.Util.Picture;
import com.example.complaintSystem.repository.PictureRepository;
import com.example.complaintSystem.service.ComplaintService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;

@SpringBootTest
class ComplaintSystemApplicationTests {

  @Autowired
  ComplaintService complaintService;

  @Test
  void contextLoads() {}


}
