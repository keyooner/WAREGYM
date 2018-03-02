package com.waregym.controllers;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.waregym.classesJava.Activity;
import com.waregym.repositories.ActivityRepository;

@Controller
public class ActivitiesController {
	
	@Autowired
	ActivityRepository activities;
	
	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "files");
	
	@PostConstruct
	public void init() throws IOException {

		if (!Files.exists(FILES_FOLDER)) {
			Files.createDirectories(FILES_FOLDER);
		}
	}
	
	@RequestMapping("clases/añadir_clase")
	public String newActivity(Model model, HttpServletRequest request) {
		
		model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("hidden",! request.isUserInRole("USER"));
		
		model.addAttribute("activities", activities.findAll());
		
		return "new_activity";
	}
	
	@RequestMapping(value = "clases/clase_añadida", method = RequestMethod.POST)
	public String addActivity(Model model, HttpServletRequest request, Activity activity, 
			@RequestParam("file") MultipartFile[] files,
			@RequestParam("schedule") String[] schedule)  {

		model.addAttribute("user", request.isUserInRole("USER"));
    	model.addAttribute("hidden",! request.isUserInRole("USER"));
    	
		String[] fileName = new String[3];
		File[] uploadedFiles = new File[3];
		String[][] activitySchedule = new String[5][3];
		
		for (int i=0; i<3; i++) {
			
			fileName[i] = "image-" + activity.getName() + "-" + (i+1) + ".jpg";
			
			if (files[i].isEmpty()) {
				
				//Error file empty
				
			} else {
				
				try {

					uploadedFiles[i] = new File(FILES_FOLDER.toFile(), fileName[i]);
					files[i].transferTo(uploadedFiles[i]);

				} catch (Exception e){}
			}
		}
		
		activity.setImage1(fileName[0]);
		activity.setImage2(fileName[1]);
		activity.setImage3(fileName[2]);
		
		for (int j=0; j<15; j++) {
			
			activitySchedule[j%5][j/5] = "";
}
		
		for (int k=0; k<schedule.length; k++) {
					
					activitySchedule[Integer.parseInt(schedule[k])%5][Integer.parseInt(schedule[k])/5] = "X";
		}
		
		activity.setSchedule(activitySchedule);
		
		activities.save(activity);
					
		model.addAttribute("activity", activity);
		model.addAttribute("activities", activities.findAll());
				
		return "activity_template";
	}
	
	@RequestMapping("clases/{id}-{name}")
	 public String showActivity(Model model, @PathVariable long id, @PathVariable String name) {
		
		Activity activity = activities.findOne(id);
		
		model.addAttribute("activity",activity);
		model.addAttribute("activities", activities.findAll());
		
		return "activity_template";
	 }
	
	@RequestMapping("clases/inscripcion")
	 public String inscripcion(Model model) {
		
		model.addAttribute("activities", activities.findAll());
	 
		return "inscripcion";
	 }
	
	@RequestMapping("/image/{fileName:.+}")
	public void handleFileDownload(@PathVariable String fileName, HttpServletResponse res)
			throws FileNotFoundException, IOException {

		Path image = FILES_FOLDER.resolve(fileName);

		if (Files.exists(image)) {
			res.setContentType("image/jpeg");
			res.setContentLength((int) image.toFile().length());
			FileCopyUtils.copy(Files.newInputStream(image), res.getOutputStream());

		} else {
			res.sendError(404, "File" + fileName + "(" + image.toAbsolutePath() + ") does not exist");
		}
	}
}
