package com.example.complaintSystem.Controller;

import com.example.complaintSystem.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
public class AdminController {
  @Autowired AdminService adminService;

  @PostMapping("/AddAdmin")
  public void createAdmin(
      @RequestParam String fullname, @RequestParam String email, @RequestParam String password)
      throws Exception {
    adminService.createAdmin(fullname, email, password);
  }
}
