package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.classesJava.Training;
import com.waregym.classesJava.User;
import com.waregym.services.UserService;
import com.waregym.services.ActivityService;

@Controller
public class WaregymController {
	
	@Autowired
	ActivityService activityService;
	
	@Autowired
	User user;
	
	@Autowired
	UserService userService;
	

	@RequestMapping("/waregym")
	 public String waregym(Model model, HttpServletRequest request) {
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("teacher", request.isUserInRole("TEACH"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
		model.addAttribute("activities", activityService.findAllActivities());
		
		String userName = request.getRemoteUser();
		user = userService.findOneByName(userName);
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
	 
		return "waregym";
	 }
}
