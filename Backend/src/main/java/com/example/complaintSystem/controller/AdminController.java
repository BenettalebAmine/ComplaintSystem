package com.example.complaintSystem.controller;

import com.example.complaintSystem.model.Admin;
import com.example.complaintSystem.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@CrossOrigin("*")
public class AdminController {
  @Autowired AdminService adminService;

  @PostMapping("/AddAdmin")
  public void createAdmin(
      @RequestParam String fullname, @RequestParam String email, @RequestParam String password)
      throws Exception {
    adminService.createAdmin(fullname, email, password);
  }
  @PostMapping("/signIn")
  public Admin signInAdmin(
           @RequestParam String email, @RequestParam String password)
          throws Exception {
     return   adminService.signInAdmin(email, password);
  }
}
