package com.waregym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.repositories.ActivityRepository;

@Controller
public class InscriptionController {
	
	@Autowired
	ActivityRepository activities;
	
	@RequestMapping("/inscripcion")
	 public String index(Model model) {
		
		model.addAttribute("activities", activities.findAll());
		model.addAttribute("activities_ins",activities.findAll());
		
		return "inscripcion";
	 }
}
