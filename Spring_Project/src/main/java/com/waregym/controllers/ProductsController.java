package com.waregym.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProductsController {

	@RequestMapping("/productos")
	 public String productos(Model model) {
	 
		return "productos";
	 }
}
