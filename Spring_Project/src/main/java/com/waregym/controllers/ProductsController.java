package com.waregym.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
		
		Product p1 = new Product("Proteínas en polvo", "BSN SYNTHA-6 5LB", 10.0, "https://zentenoshop.com/suplementos/bsn-syntha-6-5lb-proteinas-de-calidad-ultra-premium-370","Proteinas_3.jpg");
		Product p2 = new Product("Proteínas en polvo", "OPTIUM NUTRITION GOLD 900G", 9.2, "https://www.amazon.es/Optimum-Nutrition-Standard-Prote%C3%ADna-Chocolate/dp/B002DYIZHG/ref=sr_1_1?ie=UTF8&qid=1517564704&sr=8-1&keywords=proteinas","Proteinas_0.jpg");
		Product p3 = new Product("Proteínas en polvo", "WHEY 9 FRESA 900 G APTONIA", 9.4, "https://www.decathlon.es/proteina-whey-9-fresa-900-g--id_8377278.html","Proteinas_1.jpg");
		Product p4 = new Product("Proteínas en polvo", "PURE ISOLAT 2KG - 3XL", 8.0, "http://peopleandfitness.com/tienda-online/es/944-comprar-proteinas-pure-isolat-2-kg-nutrytec.html0","Proteinas_2.jpg");
		Product p5 = new Product("Aminoácidos", "ESENCIALES AAEE", 9.5, "https://nutrisport.es/aminoacidos-y-peptidos/41-aminoacidos-esenciales.html","aminoacidos_0.jpg");
		Product p6 = new Product("Aminoácidos", "API AMINO 6000", 9.1, "https://www.onelastrep.cl/products/api-amino-6000-aminoacidos-325-tabletas","aminoacidos_1.png");
		Product p7 = new Product("Aminoácidos", "AMINO ENERGY 270 GR", 9.1, "http://peopleandfitness.com/tienda-online/es/383-comprar-aminoacidos-amino-optimum-nutrition.html","aminoacidos_3.jpg");
		Product p8 = new Product("Aminoácidos", "API BCAA 180", 8.0, "https://www.onelastrep.cl/products/api-bcaa-tablets-aminoacidos-180-tabletas","aminoacidos_2.png");

		
		products.save(p1);
		products.save(p2);
		products.save(p3);
		products.save(p4);
		products.save(p5);
		products.save(p6);
		products.save(p7);
		products.save(p8);
	}
	
	@RequestMapping("/productos")
	 public String products(Model model, HttpServletRequest request, Pageable page) {
		
		model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("hidden",! request.isUserInRole("USER"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
		Page<Product> productsPage = products.findAll(new PageRequest(page.getPageNumber(), 4));
		model.addAttribute("products",productsPage);
		model.addAttribute("activities",activities.findAll());
		
		model.addAttribute("showNext",!productsPage.isLast());
		model.addAttribute("showPrev",!productsPage.isFirst());
		model.addAttribute("nextPage",productsPage.getNumber()+1);
		model.addAttribute("prevPage",productsPage.getNumber()-1);
		
		return "productos";
	 }	
	
	@RequestMapping("/nuevoProducto")
	 public String newProduct(Model model, HttpServletRequest request) {
			
			model.addAttribute("user", request.isUserInRole("USER"));
	    	model.addAttribute("hidden",! request.isUserInRole("USER"));
	    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
		model.addAttribute("products",products.findAll());
		model.addAttribute("activities",activities.findAll());

		return "new_product";
	 }
	
	@RequestMapping("/producto_añadido")
	public String addActivity(Model model, HttpServletRequest request,Product product,
			@RequestParam("file") MultipartFile file) {
		
		model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("hidden",! request.isUserInRole("USER"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
		
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
