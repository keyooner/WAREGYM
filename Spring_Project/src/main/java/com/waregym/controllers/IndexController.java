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
import com.waregym.repositories.UserRepository;

@Controller
public class IndexController {
	
	@Autowired
	ActivityRepository activities;
	
	@Autowired
	UserRepository userRepository;
	
	@RequestMapping(value={"/index","/"})
	 public String index(Model model, HttpServletRequest request) {
		//Authentication a = SecurityContextHolder.getContext().getAuthentication();
		//User currentUser = (User)a.getPrincipal();
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("teacher", request.isUserInRole("TEACH"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	String userName = request.getRemoteUser();
    	User user = userRepository.findByName(userName);
    	model.addAttribute("training", user.getTraining().getName());
		model.addAttribute("activities", activities.findAll());
		if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
		return "index";
	 }
}
