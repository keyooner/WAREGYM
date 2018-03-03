package com.waregym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.classesJava.User;
import com.waregym.repositories.ActivityRepository;
import com.waregym.repositories.UserRepository;

@Controller
public class SignUpController {
	
	@Autowired
	ActivityRepository activities;
	
	@Autowired
	UserRepository userRepository;

	@RequestMapping("/signup")
	 public String signup(Model model) {
		
		model.addAttribute("activities", activities.findAll());
	 
		return "signup";
	 }
	
	@RequestMapping("/newUser")
	 public String newUser(Model model, String name ,String password, String password2) {
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
