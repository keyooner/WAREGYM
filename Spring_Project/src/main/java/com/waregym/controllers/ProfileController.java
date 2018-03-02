package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProfileController {

	@RequestMapping("/profile")
	 public String login(Model model, HttpServletRequest request) {
	 
		model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
		return "profile";
	 }
	
	@RequestMapping("/admin")
    public String admin() {
    	
		return "admin";
    }
}