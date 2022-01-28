package com.example.complaintSystem.Service;

import com.example.complaintSystem.Model.Admin;
import com.example.complaintSystem.Repository.AdminRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

  @Autowired private AdminRepository adminRepository;

  public List<Admin> getAllAdmins() {
    return adminRepository.findAll();
  }

  public Optional<Admin> getAdminByEmail(String email) {
    return adminRepository.findByEmail(email);
  }

  public void save(Admin admin) {
    adminRepository.save(admin);
  }

  public void createAdmin(String fullname, String email, String password) throws Exception {
    if (getAdminByEmail(email).isEmpty()) {
      save(new Admin(fullname, email, password));
    } else {
      throw new Exception("ADMIN ALREADY EXIST");
    }
  }
}
