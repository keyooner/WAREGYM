package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.repositories.ActivityRepository;

@Controller
public class WaregymController {
	
	@Autowired
	ActivityRepository activities;

	@RequestMapping("/waregym")
	 public String waregym(Model model, HttpServletRequest request) {
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("PROFE"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("PROFE"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("PROFE")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
		model.addAttribute("activities", activities.findAll());
	 
		return "waregym";
	 }
}
