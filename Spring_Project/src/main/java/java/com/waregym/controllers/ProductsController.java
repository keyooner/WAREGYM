package com.waregym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.repositories.ActivityRepository;
import com.waregym.repositories.ProductRepository;

@Controller
public class ProductsController {

	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	ActivityRepository activities;

	
	@RequestMapping("/productos")
	 public String products(Model model) {
		
		model.addAttribute("products",productRepository.findAll());
		model.addAttribute("activities", activities.findAll());
		
		return "productos";
	 }
}
