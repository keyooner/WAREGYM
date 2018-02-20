package com.waregym.Controllers;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.waregym.ClassesJava.Activity;

@Controller
public class ActivitiesController {
	
	private Map<Integer,Activity> activities = new ConcurrentHashMap<>();
	private AtomicInteger id = new AtomicInteger();
	
	@RequestMapping("clases/añadir_clase")
	public String newActivity(Model model, Activity activity) {
		
		model.addAttribute("activities", activities.values());
		
		return "new_activity";
	}
	
	@RequestMapping("clases/clase_añadida")
	public String addActivity(Model model, Activity activity) {
		
		Integer activityId = id.getAndIncrement();
		
		activity.setId(activityId);
		
		activities.put(activityId, activity);
		
		model.addAttribute("activity", activity);
		model.addAttribute("activities", activities.values());
		
		return "activity_template";
	}
	
	@RequestMapping("clases/{id}-{name}")
	 public String showActivity(Model model, @PathVariable int id, @PathVariable String name) {
		
		Activity activity = activities.get(id);
		
		model.addAttribute("activity", activity);
		model.addAttribute("activities", activities.values());
	 
		return "activity_template";
	 }
	
	@RequestMapping("clases/inscripcion")
	 public String inscripcion(Model model) {
	 
		return "/clases/inscripcion";
	 }
}
