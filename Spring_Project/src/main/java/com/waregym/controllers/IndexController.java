package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.classesJava.User;
import com.waregym.repositories.ActivityRepository;

@Controller
public class IndexController {
	
	@Autowired
	ActivityRepository activities;
	
	@RequestMapping(value={"/index","/"})
	 public String index(Model model, HttpServletRequest request, User user) {
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("PROFE"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("PROFE"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	//model.addAttribute("training", user.getTraining().getName());
    	//model.addAttribute("user-name", user.getName());
    	
		model.addAttribute("activities", activities.findAll());
		
		return "index";
	 }
}
