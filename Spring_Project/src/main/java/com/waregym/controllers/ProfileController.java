package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.classesJava.Training;
import com.waregym.classesJava.User;
import com.waregym.repositories.ActivityRepository;
import com.waregym.repositories.UserRepository;

@Controller
public class ProfileController {
	
	@Autowired
	 UserRepository userRepository;
	
	@Autowired
	User user;
	
	@Autowired
	ActivityRepository activities;

	@RequestMapping("/profile")
	 public String login(Model model, HttpServletRequest request) {
			
			model.addAttribute("activities", activities.findAll());
			model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
	    	model.addAttribute("hidden", !request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
	    	model.addAttribute("onlyUser", request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
	    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
	    	model.addAttribute("teacher", request.isUserInRole("TEACH"));
	    	model.addAttribute("user", request.isUserInRole("USER"));
	    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
	    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
	    	model.addAttribute("notAdmin", request.isUserInRole("USER") || request.isUserInRole("TEACH"));
	    	String userName = request.getRemoteUser();
	    	User user = userRepository.findByName(userName);
	    	model.addAttribute("training-exists", user.getTraining().getName() != "Ninguno");
	    	model.addAttribute("training", user.getTraining().getName());
	    	
	    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
				model.addAttribute("userName",request.getRemoteUser());
			} else {model.addAttribute("userName", "");}
	    	
			user = userRepository.findByName(userName);
			if (user != null) {
				Training training = user.getTraining();
				String trainingName = training.getName();
				if ( trainingName != "Ninguno") {
					model.addAttribute("training", training.getName());
					model.addAttribute("ifTraining", true);
				} else {
						model.addAttribute("training", "");
						model.addAttribute("ifTraining", false);
				}
			} else {
				model.addAttribute("training", "");
				model.addAttribute("ifTraining", false);
			}
	 
		return "profile";
	 }
}