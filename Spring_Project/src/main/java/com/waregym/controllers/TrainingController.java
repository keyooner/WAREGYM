package com.waregym.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TrainingController {

	@RequestMapping("/entrenamientos/avanzado")
	 public String avanzado(Model model) {
	 
		return "/entrenamientos/avanzado";
	 }
	
	@RequestMapping("/entrenamientos/entrenamiento")
	 public String entrenamiento(Model model) {
	 
		return "/entrenamientos/entrenamiento";
	 }
	
	@RequestMapping("/entrenamientos/experto")
	 public String experto(Model model) {
	 
		return "/entrenamientos/experto";
	 }
	
	@RequestMapping("/entrenamientos/medio")
	 public String medio(Model model) {
	 
		return "/entrenamientos/medio";
	 }
	
	@RequestMapping("/entrenamientos/principiante")
	 public String principiante(Model model) {
	 
		return "/entrenamientos/principiante";
	 }
	
}
