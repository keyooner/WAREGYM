package com.waregym.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;
import com.waregym.repositories.ActivityRepository;

@Controller
public class DataBaseUsage implements CommandLineRunner{
	
	@Autowired
	private ActivityRepository activityRepository;
	
	@Override
	public void run(String... args) throws Exception {
		
		
	}

}
