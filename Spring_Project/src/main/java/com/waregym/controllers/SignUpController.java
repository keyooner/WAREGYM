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
public class SignUpController {
	
	@Autowired
	ActivityRepository activities;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	User user;

	@RequestMapping("/signup")
	 public String signup(Model model,HttpServletRequest request) {
		model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
		model.addAttribute("activities", activities.findAll());
		
		String userName = request.getRemoteUser();
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
	 
		return "signup";
	 }
	
	@RequestMapping("/newUser")
	 public String newUser(Model model, String name ,String password, String password2,HttpServletRequest request) {
		model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	
    	String userName = request.getRemoteUser();
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
		
		if (password.equals(password2)) {
			User sameUser = userRepository.findByName(name);
			if (sameUser != null) {
				model.addAttribute("error2",sameUser != null);
				return "signup";
			} else {
				User newUser = new User(name,password,"ROLE_USER");
				userRepository.save(newUser);
				model.addAttribute("activities", activities.findAll());
				return "/";
			}
		} else {
			model.addAttribute("error",!password.equals(password2));
			return "signup";
		}
	 }
}
