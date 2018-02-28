package com.waregym.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.waregym.classesJava.Activity;
import com.waregym.repositories.ActivityRepository;

@Controller
public class ActivitiesController {
	
	@Autowired
	ActivityRepository activities;
	
	@RequestMapping("clases/añadir_clase")
	public String newActivity(Model model) {
		
		model.addAttribute("activities", activities.findAll());
		
		return "new_activity";
	}
	
	@RequestMapping("clases/clase_añadida")
	public String addActivity(Model model, Activity activity) {
		
		activities.save(activity);
		
		model.addAttribute("activity", activity);
		model.addAttribute("activities", activities.findAll());
		
		return "activity_template";
	}
	
	@RequestMapping("clases/{id}-{name}")
	 public String showActivity(Model model, @PathVariable long id, @PathVariable String name) {
		
		Activity activity = activities.findOne(id);
		
		model.addAttribute("activity",activity);
		model.addAttribute("activities", activities.findAll());
		
		return "activity_template";
	 }
	
	@RequestMapping("clases/inscripcion")
	 public String inscripcion(Model model) {
		
		model.addAttribute("activities", activities.findAll());
	 
		return "inscripcion";
	 }
}
