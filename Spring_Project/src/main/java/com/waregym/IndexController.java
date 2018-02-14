package com.waregym;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@RequestMapping("/")
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
}
