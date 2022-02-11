package com.example.complaintSystem.repository;

import com.example.complaintSystem.model.Complaint;
import com.example.complaintSystem.model.Util.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Long> {

     List<Picture> findByComplaint(Complaint complaint);
}
