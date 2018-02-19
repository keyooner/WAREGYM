package com.waregym.Controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ClassesController {
	
	@RequestMapping("/clases/body-combat")
	 public String bodyCombat(Model model) {
		
		List<String> days = Arrays.asList("HORA","Lunes", "Miercoles", "Viernes");
		model.addAttribute("days", days);
		
		List<String> hours = Arrays.asList("11:00","13:00","17:30");
		model.addAttribute("hours",hours);
		
		model.addAttribute("class", "X");
		
		return "/clases/body-combat";
	 }
	
	@RequestMapping("/clases/inscripcion")
	 public String inscripcion(Model model) {
	 
		return "/clases/inscripcion";
	 }
	
	@RequestMapping("/clases/kick-boxing")
	 public String kickBoxing(Model model) {
	 
		return "/clases/kick-boxing";
	 }
	
	@RequestMapping("/clases/moi-thai")
	 public String moiThai(Model model) {
	 
		return "/clases/moi-thai";
	 }
	
	@RequestMapping("/clases/spinning")
	 public String spinning(Model model) {
	 
		return "/clases/spinning";
	 }
}
