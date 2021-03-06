package com.example.complaintSystem.service;

import com.example.complaintSystem.model.Admin;
import com.example.complaintSystem.repository.AdminRepository;
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

   Optional<Admin> getAdminByEmail(String email) {
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
  public Admin signInAdmin(String email,String password) throws Exception {

   Optional<Admin> admin=getAdminByEmail(email);
   if(admin.isEmpty()) throw  new Exception("This email don't Exists!!");
   if(! admin.get().getPassword().equals(password)) throw  new Exception("Wrong Password!!!");
     return  admin.get();
  }
}
