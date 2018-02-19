package com.waregym.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ProductosController {

	@RequestMapping("/productos")
	 public String productos(Model model) {
	 
		return "productos";
	 }
}
