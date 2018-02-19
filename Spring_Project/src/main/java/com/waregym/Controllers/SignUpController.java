package com.waregym.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SignUpController {

	@RequestMapping("/signup")
	 public String signup(Model model) {
	 
		return "signup";
	 }
}
