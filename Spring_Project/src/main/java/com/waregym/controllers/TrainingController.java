package com.waregym.controllers;
import com.waregym.classesJava.Training;
import com.waregym.classesJava.User;
import com.waregym.classesJava.Exercise;
import com.waregym.services.UserService;
import com.waregym.services.ActivityService;
import com.waregym.services.ExerciseService;
import com.waregym.services.TrainingService;

import java.util.ArrayList;
import java.util.List;

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
	
	@RequestMapping("/entrenamientos/avanzado")
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
		Training t = new Training("avanzado");
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(new Exercise("Flexiones",20,10));
		exercises.add(new Exercise("Press de Banca", 150, 10));
		exercises.add(new Exercise("Piernas", 60, 20));
		exercises.add(new Exercise("Barras", 10, 10));
		t.setExercises(exerciseService.saveExercises(exercises));
	    trainingService.saveTraining(t);
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
		
		return "/entrenamientos/avanzado";
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
    	
		return "/entrenamientos/entrenamiento";
	 }
	
	@RequestMapping("/entrenamientos/experto")
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
		
    	Training t = new Training("experto");
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(new Exercise("Flexiones",20,10));
		exercises.add(new Exercise("Press de Banca", 150, 10));
		exercises.add(new Exercise("Levantar a Adri", 70, 1));
		exercises.add(new Exercise("Piernas", 60, 20));
		exercises.add(new Exercise("Barras", 10, 10));
		exercises.add(new Exercise("Press de pectoral", 40, 10));
		t.setExercises(exerciseService.saveExercises(exercises));
	    trainingService.saveTraining(t);
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
	  		
	  		
		return "/entrenamientos/experto";
	 }
	
	@RequestMapping("/entrenamientos/medio")
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
		
    	Training t = new Training("medio");
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(new Exercise("Flexiones",0,20));
		exercises.add(new Exercise("Press de Banca", 70, 7));
		exercises.add(new Exercise("Pesas", 10, 5));
		exercises.add(new Exercise("Abdominales", 0, 15));
		t.setExercises(exerciseService.saveExercises(exercises));
	    trainingService.saveTraining(t);
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
 
	  		
		return "/entrenamientos/medio";
	 }
	
	@RequestMapping("/entrenamientos/principiante")
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
    	
    	Training t = new Training("principiante");
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(new Exercise("Flexiones",0,10));
		exercises.add(new Exercise("Press de Banca", 50, 5));
		exercises.add(new Exercise("Abdominales", 0, 15));
		t.setExercises(exerciseService.saveExercises(exercises));
	    trainingService.saveTraining(t);
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
		return "/entrenamientos/principiante";
	 }
	
}
