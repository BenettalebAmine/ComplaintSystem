package com.example.complaintSystem.Repository;

import com.example.complaintSystem.Model.Util.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Long> {
}
