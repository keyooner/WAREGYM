package com.waregym.databases;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import com.waregym.classesJava.Comment;
import com.waregym.classesJava.Training;
import com.waregym.classesJava.User;
import com.waregym.services.CommentService;
import com.waregym.services.TrainingService;
import com.waregym.services.UserService;

@Controller
public class DataBaseUsage implements CommandLineRunner{
	
	 @Autowired
	    private UserService userService;
	 
	 @Autowired
	 	private CommentService commentService;
	 
	 @Autowired
	 	private TrainingService trainingService;

	    @PostConstruct
	    private void initDatabase() {
	    	
	    	userService.saveUser(new User("user", "pass", "ROLE_USER"));
			userService.saveUser(new User("admin", "adminpass", "ROLE_ADMIN"));
			userService.saveUser(new User("teach", "teachpass", "ROLE_TEACH"));
			userService.saveUser(new User("carolo", "carolo", "ROLE_ADMIN"));
			userService.saveUser(new User("adrian", "a", "ROLE_USER"));
			
		    commentService.saveComment(new Comment("Pepe", "pp@gmail.com", 123456789 ,"Comentario 1"));
			commentService.saveComment(new Comment("Juan", "juan@gmail.com", 123456789 ,"Comentario 2"));
			
			trainingService.saveTraining(new Training("Principiante"));
			trainingService.saveTraining(new Training("Avanzado"));
			trainingService.saveTraining(new Training("Medio"));
			trainingService.saveTraining(new Training("Experto"));
			
	    }

		@Override
		public void run(String... arg0) throws Exception {
			// TODO Auto-generated method stub
			
		}

}
