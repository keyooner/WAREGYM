package com.waregym.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.waregym.classesJava.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, Long>{
	
}
