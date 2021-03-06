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
public class SignUpController {
	
	@Autowired
	ActivityService activityService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	User user;

	@RequestMapping("/signup")
	 public String signup(Model model,HttpServletRequest request) {
		model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
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
	 
		return "signup";
	 }
	
	@RequestMapping("/newUser")
	 public String newUser(Model model, String name ,String password, String password2,HttpServletRequest request) {
		model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	
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
		
		if (password.equals(password2)) {
			User sameUser = userService.findOneByName(name);
			if (sameUser != null) {
				model.addAttribute("error2",sameUser != null);
				return "signup";
			} else {
				User newUser = new User(name,password,"ROLE_USER");
				userService.saveUser(newUser);
				model.addAttribute("activities", activityService.findAllActivities());
				return "/";
			}
		} else {
			model.addAttribute("error",!password.equals(password2));
			return "signup";
		}
	 }
}
