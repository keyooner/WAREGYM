package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.classesJava.User;

@Controller
public class ProfileController {

	@RequestMapping("/profile")
	 public String login(Model model, HttpServletRequest request, User user) {
			
			model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("PROFE"));
	    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("PROFE"));
	    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
	    	model.addAttribute("user", request.isUserInRole("USER"));
	    	//model.addAttribute("user-name", user.getName());
	 
		return "profile";
	 }
}