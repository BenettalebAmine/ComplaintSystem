package com.example.complaintSystem.Repository;

import com.example.complaintSystem.Model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint,Long> {


    @Transactional
    @Modifying
    @Query(" update Complaint set complaintResolutionCounter=complaintResolutionCounter+1 where id= ?1 ")
    void incrementComplaintResolutionCounter(long complaintId);
}
