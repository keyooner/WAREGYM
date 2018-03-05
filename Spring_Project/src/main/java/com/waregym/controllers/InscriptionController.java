package com.waregym.controllers;

import java.security.Principal;
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
	
	@Autowired
	User user;

	@RequestMapping("/clases/inscripcion")
	 public String index(Model model, HttpServletRequest request) {
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("teacher", request.isUserInRole("TEACH"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
    	String userName = request.getRemoteUser();
		user = userRepository.findByName(userName);
    	
		model.addAttribute("activities", activities.findAll());
		
		ArrayList<Activity> activitiesFor = (ArrayList<Activity>) activities.findAll();
		ArrayList<ActivityInscribed> activitiesInscribed = new ArrayList<ActivityInscribed>();
		
		for(Activity activity: activitiesFor) {
			ActivityInscribed actIns = new ActivityInscribed();
			actIns.setActivity(activity);	
			actIns.setButtonText("Inscribirse");
			for(int i = 0; i < activity.getUsers().size(); i++) {
				if (activity.getUsers() != null && !activity.getUsers().isEmpty() 
						&& activity.getUsers().get(i).getId().equals(user.getId())) {
					actIns.setShowInscribed(true);
					actIns.setButtonText("Borrar inscripción");
				}
			}
			actIns.setShowDelete(!actIns.isShowInscribed());
			activitiesInscribed.add(actIns);			 
		}
		
		model.addAttribute("activitiesInscribed", activitiesInscribed);
		
		
		return "inscription";
	 }
	
	@RequestMapping("/clase_inscrita")
	 public String inscribe(Model model, HttpServletRequest request, @RequestParam Long id) {
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("teacher", request.isUserInRole("TEACH"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
			
		} else {model.addAttribute("userName", "");}
		
    	String userName = request.getRemoteUser();
		user = userRepository.findByName(userName);
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
