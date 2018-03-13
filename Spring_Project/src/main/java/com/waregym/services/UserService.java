package com.waregym.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.waregym.classesJava.User;
import com.waregym.repositories.UserRepository;

@Service
public class UserService {
	
	private final UserRepository userRepository;
	
	 @Autowired
	 public UserService(UserRepository userRepository) {
		 this.userRepository = userRepository;
	 }

    public User findOneByName(String name) {
        return userRepository.findByName(name);
    }
    
    public void saveUser(User user) {
    	userRepository.save(user);
    }

}