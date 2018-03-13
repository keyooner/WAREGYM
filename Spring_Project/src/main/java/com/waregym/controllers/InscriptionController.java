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
import com.waregym.classesJava.Training;
import com.waregym.classesJava.User;
import com.waregym.repositories.ActivityRepository;
import com.waregym.repositories.UserRepository;
import com.waregym.services.ActivityService;

@Controller
public class InscriptionController {
	
	static final int MAX_INSCRIBED = 15;
	
	@Autowired
	ActivityService activityService;
	
	@Autowired
	UserRepository userRepository;
	
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
    	
		model.addAttribute("activities", activityService.findAllActivities());
		
		ArrayList<Activity> activitiesFor = (ArrayList<Activity>) activityService.findAllActivities();
		ArrayList<ActivityInscribed> activitiesInscribed = new ArrayList<ActivityInscribed>();
		
		for(Activity activity: activitiesFor) {
			ActivityInscribed actIns = new ActivityInscribed();
			actIns.setActivity(activity);
			if(activity.getInscribed() < MAX_INSCRIBED) {
				
			}
				actIns.setButtonText("Inscribirse");
				for(int i = 0; i < activity.getUsers().size(); i++) {
					if (activity.getUsers() != null && !activity.getUsers().isEmpty() 
							&& activity.getUsers().get(i).getId().equals(user.getId())) {
						actIns.setShowInscribed(true);
						actIns.setButtonText("Borrar inscripción");
					}
				}
			actIns.setInscribed(activity.getInscribed());
			actIns.setShowDelete(!actIns.isShowInscribed());
			actIns.setFull(actIns.getInscribed() > 0);
			actIns.setShowButton(actIns.isShowInscribed() || actIns.getInscribed() < MAX_INSCRIBED);
			actIns.setShowText(!actIns.isShowButton());
			activitiesInscribed.add(actIns);		 
		}
		
		model.addAttribute("activitiesInscribed", activitiesInscribed);
		
		user = userRepository.findByName(userName);
		if (user != null) {
			Training training = user.getTraining();
			String trainingName = training.getName();
			if ( trainingName != "Ninguno") {
				model.addAttribute("training", training.getName());
				model.addAttribute("ifTraining", true);
			} else {
					model.addAttribute("training", "");
					model.addAttribute("ifTraining", false);
			}
		} else {
			model.addAttribute("training", "");
			model.addAttribute("ifTraining", false);
		}
		
		
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
    	model.addAttribute("activities", activityService.findAllActivities());
    	
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
			
		} else {model.addAttribute("userName", "");}
		
    	String userName = request.getRemoteUser();
		user = userRepository.findByName(userName);
		Activity activity = activityService.findOneById(id);
		
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
			activity.setInscribed(activity.getInscribed()+1);
		}
		else {
			user.getActivities().remove(counter);
			activity.setInscribed(activity.getInscribed()-1);
		}
		
		userRepository.save(user);
		
		user = userRepository.findByName(userName);
		if (user != null) {
			Training training = user.getTraining();
			String trainingName = training.getName();
			if ( trainingName != "Ninguno") {
				model.addAttribute("training", training.getName());
				model.addAttribute("ifTraining", true);
			} else {
					model.addAttribute("training", "");
					model.addAttribute("ifTraining", false);
			}
		} else {
			model.addAttribute("training", "");
			model.addAttribute("ifTraining", false);
		}
		
		return index(model, request);		
	}

	
	}
