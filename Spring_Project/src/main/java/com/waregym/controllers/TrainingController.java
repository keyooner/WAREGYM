package com.waregym.controllers;
import com.waregym.classesJava.Training;
import com.waregym.classesJava.User;
import com.waregym.services.UserService;
import com.waregym.services.ActivityService;
import com.waregym.services.ExerciseService;
import com.waregym.services.TrainingService;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TrainingController {
	
	@Autowired
	 TrainingService trainingService;	
	
	@Autowired
	 ExerciseService exerciseService;
	
	@Autowired
	 UserService userService;
	
	@Autowired
	ActivityService activityService;
	
	@Autowired
	User user;
	
	@RequestMapping("/entrenamientos/Avanzado")
	 public String avanzado(Model model, HttpServletRequest request) {
		
		model.addAttribute("activities", activityService.findAllActivities());
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("teacher", request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
    	Training t = trainingService.findOneById(7);
	    String userName = request.getRemoteUser();
		User user = userService.findOneByName(userName);
		user.setTraining(t);
		userService.saveUser(user);
		
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
		}
		
		return "entrenamientos/Avanzado";
	 }
	
	@RequestMapping("/entrenamientos/entrenamiento")
	 public String entrenamiento(Model model, HttpServletRequest request) {
		
		model.addAttribute("activities", activityService.findAllActivities());
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
    	
    	String userName = request.getRemoteUser();
		user = userService.findOneByName(userName);
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
    	
		return "entrenamientos/entrenamiento";
	 }
	
	@RequestMapping("/entrenamientos/Experto")
	 public String experto(Model model, HttpServletRequest request) {
		
		model.addAttribute("activities", activityService.findAllActivities());
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
    	Training t = trainingService.findOneById(9);
	    String userName = request.getRemoteUser();
  		User user = userService.findOneByName(userName);
  		user.setTraining(t);
  		userService.saveUser(user);

		user = userService.findOneByName(userName);
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
	  		
	  		
		return "entrenamientos/Experto";
	 }
	
	@RequestMapping("/entrenamientos/Medio")
	 public String medio(Model model, HttpServletRequest request) {
		
		model.addAttribute("activities", activityService.findAllActivities());
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
    	Training t = trainingService.findOneById(8);
	    String userName = request.getRemoteUser();
  		User user = userService.findOneByName(userName);
  		user.setTraining(t);
  		userService.saveUser(user);
  		
		user = userService.findOneByName(userName);
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
 
	  		
		return "entrenamientos/Medio";
	 }
	
	@RequestMapping("/entrenamientos/Principiante")
	 public String principiante(Model model, HttpServletRequest request) {
		
		model.addAttribute("activities", activityService.findAllActivities());
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
    	
    	Training t = trainingService.findOneById(6);
	    String userName = request.getRemoteUser();
  		User user = userService.findOneByName(userName);
  		user.setTraining(t);
  		userService.saveUser(user);
  		user = userService.findOneByName(userName);
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
		return "entrenamientos/Principiante";
	 }
	
}
