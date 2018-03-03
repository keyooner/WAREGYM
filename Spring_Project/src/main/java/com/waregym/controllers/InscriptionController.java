package com.waregym.controllers;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.waregym.classesJava.Activity;
import com.waregym.classesJava.ActivityInscribed;
import com.waregym.classesJava.User;
import com.waregym.repositories.ActivityRepository;
import com.waregym.repositories.UserRepository;

@Controller
public class InscriptionController {
	
	@Autowired
	ActivityRepository activities;
	
	@Autowired
	UserRepository userRepository;
	
	@RequestMapping("/inscripcion")
	 public String index(Model model, HttpServletRequest request) {
		
		model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("hidden",! request.isUserInRole("USER"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
		model.addAttribute("activities", activities.findAll());
		model.addAttribute("activities_ins",activities.findAll());
		
		ArrayList<Activity> activitiesFor = (ArrayList<Activity>) activities.findAll();
		ArrayList<ActivityInscribed> activitiesInscribed = new ArrayList<ActivityInscribed>();
		
		for(Activity activity: activitiesFor) {
			ActivityInscribed actIns = new ActivityInscribed();
			actIns.setActivity(activity);			
			for(int i = 0; i < activity.getUsers().size(); i++) {
				if (activity.getUsers() != null && !activity.getUsers().isEmpty() 
						&& activity.getUsers().get(i).getName().equals("user")) {
					actIns.setInscribed(true);
				}
			}
			activitiesInscribed.add(actIns);			 
		}
		
		model.addAttribute("activitiesInscribed", activitiesInscribed);
		
		return "inscripcion";
	 }
	
	@RequestMapping("/clase_inscrita")
	 public String inscribe(Model model, @RequestParam Long id, HttpServletRequest request) {
		
		User user = userRepository.findById((long)1);
		
		
		return index(model, request);
		
	}
}
