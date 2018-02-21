package com.waregym.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.waregym.ClassesJava.Activity;;

public interface ActivityRepository extends JpaRepository<Activity, String>{
	
}
