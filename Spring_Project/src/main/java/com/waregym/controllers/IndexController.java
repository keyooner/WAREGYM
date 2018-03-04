package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
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
		//Authentication a = SecurityContextHolder.getContext().getAuthentication();
		//User currentUser = (User)a.getPrincipal();
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	//model.addAttribute("training", currentUser.getTraining().getName());
    	
		model.addAttribute("activities", activities.findAll());
		if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
		return "index";
	 }
}
