package com.waregym.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WaregymController {

	@RequestMapping("/waregym")
	 public String waregym(Model model) {
	 
		return "waregym";
	 }
}
