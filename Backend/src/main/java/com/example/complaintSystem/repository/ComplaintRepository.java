package com.example.complaintSystem.repository;

import com.example.complaintSystem.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint,Long> {


    @Transactional
    @Modifying
    @Query(" update Complaint set complaintResolutionCounter=complaintResolutionCounter+1 where id= ?1 ")
    void incrementComplaintResolutionCounter(long complaintId);

    @Transactional
    @Modifying
    @Query(" update Complaint set complaintCounter=complaintCounter+1 where id= ?1 ")
    void incrementComplaintCounter(long complaintId);


    @Query("select c  from Complaint as c where c.latitude=?1 and c.longitude=?2 ")
    public Optional<Complaint> getomplaintByLocation(double latitude, double longitude );

    @Query("select c  from Complaint as c where c.status=false")
    List<Complaint> findAllValid();
}
