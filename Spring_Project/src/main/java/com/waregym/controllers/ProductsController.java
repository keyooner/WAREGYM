package com.waregym.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.waregym.classesJava.Product;
import com.waregym.repositories.ActivityRepository;
import com.waregym.repositories.ProductRepository;


@Controller
public class ProductsController {

	@Autowired
	ProductRepository products;
	
	@Autowired
	ActivityRepository activities;
	
	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "files");
	
	@PostConstruct
	public void init() throws IOException {

		if (!Files.exists(FILES_FOLDER)) {
			Files.createDirectories(FILES_FOLDER);
		}
		/*
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
		*/
	}
	
	@RequestMapping("/productos")
	 public String products(Model model) {
		
		model.addAttribute("products",products.findAll());
		model.addAttribute("activities",activities.findAll());
		
		return "productos";
	 }
	
	@RequestMapping("/nuevoProducto")
	 public String newProduct(Model model) {
		
		model.addAttribute("products",products.findAll());
		model.addAttribute("activities",activities.findAll());

		return "new_product";
	 }
	
	@RequestMapping("/producto_añadido")
	public String addActivity(Model model, Product product,
			@RequestParam("file") MultipartFile file) {
		
		String fileName = "image-" + product.getName() + ".jpg";
		
		if (file.isEmpty()) {
			
			//Error file empty
			
		} else {
			
			try {

				File uploadedFile = new File(FILES_FOLDER.toFile(), fileName);
				file.transferTo(uploadedFile);
				
				product.setImage(fileName);

			} catch (Exception e){}
		}
		
		products.save(product);
		
		model.addAttribute("products",products.findAll());
		model.addAttribute("activities", activities.findAll());
		
		return "productos";
	} 
	
	
}
