package com.waregym.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@RequestMapping(value={"/index","/"})
	 public String index(Model model, HttpServletRequest request) {
	    	
	    	model.addAttribute("user", request.isUserInRole("USER"));
	    	model.addAttribute("hidden",! request.isUserInRole("USER"));
	    	
		return "index";
	 }
}
