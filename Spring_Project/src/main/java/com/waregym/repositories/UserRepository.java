package com.waregym.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.waregym.classesJava.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByName(String name);
	
}
