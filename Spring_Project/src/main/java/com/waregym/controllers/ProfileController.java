package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.classesJava.User;
import com.waregym.repositories.UserRepository;

@Controller
public class ProfileController {
	
	@Autowired
	 UserRepository userRepository;

	@RequestMapping("/profile")
	 public String login(Model model, HttpServletRequest request) {
			
			model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
	    	model.addAttribute("hidden", !request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
	    	model.addAttribute("onlyUser", request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
	    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
	    	model.addAttribute("teacher", request.isUserInRole("TEACH"));
	    	model.addAttribute("user", request.isUserInRole("USER"));
	    	String userName = request.getRemoteUser();
	    	User user = userRepository.findByName(userName);
	    	model.addAttribute("training", user.getTraining().getName());
	    	
	    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
				model.addAttribute("userName",request.getRemoteUser());
			} else {model.addAttribute("userName", "");}
	 
		return "profile";
	 }
}