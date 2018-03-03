package com.waregym.databases;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import com.waregym.classesJava.User;
import com.waregym.repositories.ActivityRepository;
import com.waregym.repositories.UserRepository;

@Controller
public class DataBaseUsage implements CommandLineRunner{
	
	@Autowired
	private ActivityRepository activityRepository;
	
	 @Autowired
	    private UserRepository userRepository;

	    @PostConstruct
	    private void initDatabase() {
	    	
	    	userRepository.save(new User("user", "pass", "ROLE_USER"));
			userRepository.save(new User("admin", "adminpass", "ROLE_ADMIN"));
			userRepository.save(new User("profe", "profepass", "ROLE_PROFE"));
	    }

		@Override
		public void run(String... arg0) throws Exception {
			// TODO Auto-generated method stub
			
		}

}
