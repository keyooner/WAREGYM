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

	@Autowired
	ActivityRepository activityRepository;

	@RequestMapping("/inscripcion")
	 public String index(Model model, HttpServletRequest request) {
		
		model.addAttribute("user", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("PROFE"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("PROFE"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
		model.addAttribute("activities", activities.findAll());
		model.addAttribute("activities_ins",activities.findAll());
		
		ArrayList<Activity> activitiesFor = (ArrayList<Activity>) activities.findAll();
		ArrayList<ActivityInscribed> activitiesInscribed = new ArrayList<ActivityInscribed>();
		
		for(Activity activity: activitiesFor) {
			ActivityInscribed actIns = new ActivityInscribed();
			actIns.setActivity(activity);	
			actIns.setButtonText("Inscribirse");
			for(int i = 0; i < activity.getUsers().size(); i++) {
				if (activity.getUsers() != null && !activity.getUsers().isEmpty() 
						&& activity.getUsers().get(i).getName().equals("user")) {
					actIns.setShowInscribed(true);
					actIns.setButtonText("Borrar inscripción");
				}
			}
			actIns.setShowDelete(!actIns.isShowInscribed());
			activitiesInscribed.add(actIns);			 
		}
		
		model.addAttribute("activitiesInscribed", activitiesInscribed);
		
		return "inscripcion";
	 }
	
	@RequestMapping("/clase_inscrita")
	 public String inscribe(Model model, HttpServletRequest request, @RequestParam Long id) {
		
		model.addAttribute("user", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("PROFE"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("PROFE"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
		User user = userRepository.findById((long)1);
		Activity activity = activityRepository.findById(id);
		
		boolean found = false;
		int counter = 0;
		if(user != null && user.getActivities() != null && !user.getActivities().isEmpty()) {
			while(!found && counter < user.getActivities().size()) {
				if(user.getActivities().get(counter).getId() == id) {
					found = true;
				}
				else{
					counter++;
				}
			}
		}
		
		if(!found) {
			user.getActivities().add(activity);			
		}
		else {
			user.getActivities().remove(counter);
		}
		
		userRepository.save(user);
		
		return index(model, request);		
	}
}
