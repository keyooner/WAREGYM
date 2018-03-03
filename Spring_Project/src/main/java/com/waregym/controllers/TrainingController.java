package com.waregym.controllers;
import com.waregym.classesJava.Training;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TrainingController {

	@RequestMapping("/entrenamientos/avanzado")
	 public String avanzado(Model model, HttpServletRequest request) {
			
		model.addAttribute("user", request.isUserInRole("USER"));
		model.addAttribute("hidden",! request.isUserInRole("USER"));
		model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
	    model.addAttribute(new Training("avanzado"));
	    
		return "/entrenamientos/avanzado";
	 }
	
	@RequestMapping("/entrenamientos/entrenamiento")
	 public String entrenamiento(Model model, HttpServletRequest request) {
			
		model.addAttribute("user", request.isUserInRole("USER"));
		model.addAttribute("hidden",! request.isUserInRole("USER"));
		model.addAttribute("admin", request.isUserInRole("ADMIN"));
	 
		return "/entrenamientos/entrenamiento";
	 }
	
	@RequestMapping("/entrenamientos/experto")
	 public String experto(Model model, HttpServletRequest request) {
			
		model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("hidden",! request.isUserInRole("USER"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
		model.addAttribute(new Training("experto"));
		
		return "/entrenamientos/experto";
	 }
	
	@RequestMapping("/entrenamientos/medio")
	 public String medio(Model model, HttpServletRequest request) {
			
		model.addAttribute("user", request.isUserInRole("USER"));
 	    model.addAttribute("hidden",! request.isUserInRole("USER"));
 	    model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
		model.addAttribute(new Training("medio"));
		
		return "/entrenamientos/medio";
	 }
	
	@RequestMapping("/entrenamientos/principiante")
	 public String principiante(Model model, HttpServletRequest request) {
			
		model.addAttribute("user", request.isUserInRole("USER"));
	    model.addAttribute("hidden",! request.isUserInRole("USER"));
	    model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
		model.addAttribute(new Training("principiante"));
		
		return "/entrenamientos/principiante";
	 }
	
}
