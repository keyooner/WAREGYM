package com.waregym.controllers;
import com.waregym.classesJava.Training;
import com.waregym.classesJava.Exercise;
import com.waregym.repositories.ExerciseRepository;
import com.waregym.repositories.TrainingRepository;

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
	 TrainingRepository training;	
	@Autowired
	 ExerciseRepository exercise;
	
	@RequestMapping("/entrenamientos/avanzado")
	 public String avanzado(Model model, HttpServletRequest request) {
			
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("teacher", request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		Training t = new Training("Avanzado");
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(new Exercise("Flexiones",20,10));
		exercises.add(new Exercise("Press de Banca", 150, 10));
		exercises.add(new Exercise("Piernas", 60, 20));
		exercises.add(new Exercise("Barras", 10, 10));
		t.setExercises(exercise.save(exercises));
	    training.save(t);
		return "/entrenamientos/avanzado";
	 }
	
	@RequestMapping("/entrenamientos/entrenamiento")
	 public String entrenamiento(Model model, HttpServletRequest request) {
			
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
    	
		return "/entrenamientos/entrenamiento";
	 }
	
	@RequestMapping("/entrenamientos/experto")
	 public String experto(Model model, HttpServletRequest request) {
			
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
    	Training t = new Training("Experto");
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(new Exercise("Flexiones",20,10));
		exercises.add(new Exercise("Press de Banca", 150, 10));
		exercises.add(new Exercise("Levantar a Adri", 70, 1));
		exercises.add(new Exercise("Piernas", 60, 20));
		exercises.add(new Exercise("Barras", 10, 10));
		exercises.add(new Exercise("Press de pectoral", 40, 10));
		t.setExercises(exercise.save(exercises));
	    training.save(t);
		
		return "/entrenamientos/experto";
	 }
	
	@RequestMapping("/entrenamientos/medio")
	 public String medio(Model model, HttpServletRequest request) {
			
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
    	Training t = new Training("Medio");
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(new Exercise("Flexiones",0,20));
		exercises.add(new Exercise("Press de Banca", 70, 7));
		exercises.add(new Exercise("Pesas", 10, 5));
		exercises.add(new Exercise("Abdominales", 0, 15));
		t.setExercises(exercise.save(exercises));
	    training.save(t);
		
		return "/entrenamientos/medio";
	 }
	
	@RequestMapping("/entrenamientos/principiante")
	 public String principiante(Model model, HttpServletRequest request) {
			
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
    	
    	Training t = new Training("Principiante");
		List<Exercise> exercises = new ArrayList<Exercise>();
		exercises.add(new Exercise("Flexiones",0,10));
		exercises.add(new Exercise("Press de Banca", 50, 5));
		exercises.add(new Exercise("Abdominales", 0, 15));
		t.setExercises(exercise.save(exercises));
	    training.save(t);
		return "/entrenamientos/principiante";
	 }
	
}
