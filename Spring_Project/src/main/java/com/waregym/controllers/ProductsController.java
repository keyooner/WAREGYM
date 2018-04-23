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
import com.waregym.classesJava.Training;
import com.waregym.classesJava.User;
import com.waregym.services.UserService;
import com.waregym.services.ActivityService;
import com.waregym.services.ProductService;


@Controller
public class ProductsController {

	@Autowired
	ProductService productsService;
	
	@Autowired
	ActivityService activityService;
	
	@Autowired
	User user;
	
	@Autowired
	UserService userService;
	
	
	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "../angular/src/assets/files");
	
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

		
		productsService.saveProduct(p1);
		productsService.saveProduct(p2);
		productsService.saveProduct(p3);
		productsService.saveProduct(p4);
		productsService.saveProduct(p5);
		productsService.saveProduct(p6);
		productsService.saveProduct(p7);
		productsService.saveProduct(p8);
	}
	
	@RequestMapping("/productos")
	 public String products(Model model, HttpServletRequest request, Pageable page) {
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
		Page<Product> productsPage = productsService.findAllProductPage(new PageRequest(page.getPageNumber(), 4));
		model.addAttribute("products",productsPage);
		model.addAttribute("activities",activityService.findAllActivities());
		
		model.addAttribute("showNext",!productsPage.isLast());
		model.addAttribute("showPrev",!productsPage.isFirst());
		model.addAttribute("nextPage",productsPage.getNumber()+1);
		model.addAttribute("prevPage",productsPage.getNumber()-1);
		
		String userName = request.getRemoteUser();
		user = userService.findOneByName(userName);
		if (user != null) {
			Training training = user.getTraining();
			String trainingName = training.getName();
			if ( trainingName != "Ninguno") {
				model.addAttribute("training", training.getName());
				model.addAttribute("ifTraining", true);
			} else {
					model.addAttribute("training", "");
					model.addAttribute("ifTraining", false);
			}
		} else {
			model.addAttribute("training", "");
			model.addAttribute("ifTraining", false);
		}
		
		return "products";
	 }	
	
	@RequestMapping("/nuevoProducto")
	 public String newProduct(Model model, HttpServletRequest request) {
			
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
		model.addAttribute("products",productsService.findAllProducts());
		model.addAttribute("activities",activityService.findAllActivities());
		
		String userName = request.getRemoteUser();
		user = userService.findOneByName(userName);
		if (user != null) {
			Training training = user.getTraining();
			String trainingName = training.getName();
			if ( trainingName != "Ninguno") {
				model.addAttribute("training", training.getName());
				model.addAttribute("ifTraining", true);
			} else {
					model.addAttribute("training", "");
					model.addAttribute("ifTraining", false);
			}
		} else {
			model.addAttribute("training", "");
			model.addAttribute("ifTraining", false);
		}

		return "new_product";
	 }
	
	@RequestMapping("/producto_añadido")
	public String addActivity(Model model, HttpServletRequest request, Product product,
			@RequestParam("file") MultipartFile file, Pageable page) {
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
		String fileName = file.getOriginalFilename();
		
		if (file.isEmpty()) {
			
			product.setImage("");
			
		} else {
			
			try {

				File uploadedFile = new File(FILES_FOLDER.toFile(), fileName);
				file.transferTo(uploadedFile);
				
				product.setImage(fileName);

			} catch (Exception e){}
		}
		
		productsService.saveProduct(product);
		
		Page<Product> productsPage = productsService.findAllProductPage(new PageRequest(page.getPageNumber(), 4));
		model.addAttribute("products",productsPage);
		model.addAttribute("activities",activityService.findAllActivities());
		
		model.addAttribute("showNext",!productsPage.isLast());
		model.addAttribute("showPrev",!productsPage.isFirst());
		model.addAttribute("nextPage",productsPage.getNumber()+1);
		model.addAttribute("prevPage",productsPage.getNumber()-1);
		
		String userName = request.getRemoteUser();
		user = userService.findOneByName(userName);
		if (user != null) {
			Training training = user.getTraining();
			String trainingName = training.getName();
			if ( trainingName != "Ninguno") {
				model.addAttribute("training", training.getName());
				model.addAttribute("ifTraining", true);
			} else {
					model.addAttribute("training", "");
					model.addAttribute("ifTraining", false);
			}
		} else {
			model.addAttribute("training", "");
			model.addAttribute("ifTraining", false);
		}
		
		return "products";
	} 
	
	@RequestMapping("/producto_eliminado")
	public String deleteProduct(Model model, HttpServletRequest request, @RequestParam("id") long id, Pageable page) {
		
		Product p = productsService.findOneById(id);
		productsService.deleteProduct(p);
		
		model.addAttribute("logout", request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH"));
    	model.addAttribute("hidden",!request.isUserInRole("USER")&&!request.isUserInRole("ADMIN")&&!request.isUserInRole("TEACH"));
    	model.addAttribute("admin", request.isUserInRole("ADMIN"));
    	model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("TeachOrAdmin",request.isUserInRole("TEACH")||request.isUserInRole("ADMIN"));
    	model.addAttribute("UserOrTeach",request.isUserInRole("TEACH")||request.isUserInRole("USER"));
    	if (request.isUserInRole("USER")||request.isUserInRole("ADMIN")||request.isUserInRole("TEACH")) {
			model.addAttribute("userName",request.getRemoteUser());
		} else {model.addAttribute("userName", "");}
		
		Page<Product> productsPage = productsService.findAllProductPage(new PageRequest(page.getPageNumber(), 4));
		model.addAttribute("products",productsPage);
		model.addAttribute("activities",activityService.findAllActivities());
		
		model.addAttribute("showNext",!productsPage.isLast());
		model.addAttribute("showPrev",!productsPage.isFirst());
		model.addAttribute("nextPage",productsPage.getNumber()+1);
		model.addAttribute("prevPage",productsPage.getNumber()-1);
		
		String userName = request.getRemoteUser();
		user = userService.findOneByName(userName);
		if (user != null) {
			Training training = user.getTraining();
			String trainingName = training.getName();
			if ( trainingName != "Ninguno") {
				model.addAttribute("training", training.getName());
				model.addAttribute("ifTraining", true);
			} else {
					model.addAttribute("training", "");
					model.addAttribute("ifTraining", false);
			}
		} else {
			model.addAttribute("training", "");
			model.addAttribute("ifTraining", false);
		}
    	
    	return "products";

	} 
	
	
}
