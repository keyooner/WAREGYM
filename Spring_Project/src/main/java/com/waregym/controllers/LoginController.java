package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

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
	 public String login(Model model,HttpServletRequest request) {
		model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
		model.addAttribute("activities", activities.findAll());
	 
		return "login";
	 }
	
	@RequestMapping("/loginerror")
	 public String loginerror(Model model,HttpServletRequest request) {
		model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
		return "loginerror";
	 }
}
