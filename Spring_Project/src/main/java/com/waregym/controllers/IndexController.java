package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.repositories.ActivityRepository;

@Controller
public class IndexController {
	
	@Autowired
	ActivityRepository activities;
	
	@RequestMapping(value={"/index","/"})
	 public String index(Model model, HttpServletRequest request) {
		
		model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("hidden",! request.isUserInRole("USER"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	
		model.addAttribute("activities", activities.findAll());
		
		return "index";
	 }
}
