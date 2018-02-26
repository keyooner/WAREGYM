package com.waregym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.repositories.ActivityRepository;

@Controller
public class ContactController {
	
	@Autowired
	ActivityRepository activities;

	@RequestMapping("/contacto")
	 public String contacto(Model model) {
		
		model.addAttribute("activities", activities.findAll());
		
		return "contacto";
	 }
}