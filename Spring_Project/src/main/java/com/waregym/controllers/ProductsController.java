package com.waregym.controllers;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.waregym.classesJava.Product;
import com.waregym.repositories.ActivityRepository;
import com.waregym.repositories.ProductRepository;


@Controller
public class ProductsController {

	@Autowired
	ProductRepository products;
	
	@Autowired
	ActivityRepository activities;
	
	@PostConstruct
	public void init() {

		Product p1 = new Product("a", "a", 5.0, "a");
		Product p2 = new Product("b", "b", 5.0, "b");
		Product p3 = new Product("c", "c", 5.0, "c");
		Product p4 = new Product("d", "d", 5.0, "d");
		Product p5 = new Product("e", "e", 5.0, "e");

		products.save(p1);
		products.save(p2);
		products.save(p3);
		products.save(p4);
		products.save(p5);

	}
	
	@RequestMapping("/productos")
	 public String products(Model model) {
		
		model.addAttribute("products",products.findAll());
		model.addAttribute("activities",activities.findAll());
		
		return "productos";
	 }
	
	@RequestMapping("/productos/nuevoProducto")
	 public String newProduct(Model model) {
		
		model.addAttribute("products",products.findAll());
		model.addAttribute("activities",activities.findAll());

		return "new_product";
	 }
	
	@RequestMapping("/productos/youu")
	public String addActivity(Model model) {
		
		//products.save(product);
		
		//model.addAttribute("products",products.findAll());
		//model.addAttribute("activities", activities.findAll());
		
		return "index";
	} 
	
	
}
