package com.waregym.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.waregym.classesJava.Activity;


public interface ActivityRepository extends JpaRepository<Activity, Long>{
	
	List<Activity> findByName(String name);
	
}
