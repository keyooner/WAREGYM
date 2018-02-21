package com.waregym.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.waregym.classesJava.Activity;;

public interface ActivityRepository extends JpaRepository<Activity, String>{
	
}
