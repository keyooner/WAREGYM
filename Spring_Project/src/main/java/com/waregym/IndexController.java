package com.waregym;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@RequestMapping("/index")
	 public String index(Model model) {
	 
		return "index";
	 }
	
	@RequestMapping("/login")
	 public String login(Model model) {
	 
		return "login";
	 }
	
	@RequestMapping("/contacto")
	 public String contacto(Model model) {
		
		return "contacto";
	 }
	
	@RequestMapping("/productos")
	 public String productos(Model model) {
	 
		return "productos";
	 }
	
	@RequestMapping("/signup")
	 public String signup(Model model) {
	 
		return "signup";
	 }
	
	@RequestMapping("/waregym")
	 public String waregym(Model model) {
	 
		return "waregym";
	 }
	
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
