package com.waregym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.repositories.ActivityRepository;

@Controller
public class LoginController {
	
	@Autowired
	ActivityRepository activities;

	@RequestMapping("/login")
	 public String login(Model model) {
		
		model.addAttribute("activities", activities.findAll());
	 
		return "login";
	 }
	
	@RequestMapping("/loginerror")
	 public String loginerror(Model model) {
		return "login";
	 }
}
