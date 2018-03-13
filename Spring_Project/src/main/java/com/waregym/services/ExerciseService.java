package com.waregym.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.waregym.classesJava.Exercise;
import com.waregym.repositories.ExerciseRepository;

@Service
public class ExerciseService {
	
	private final ExerciseRepository exerciseRepository;
	
	 @Autowired
	 public ExerciseService(ExerciseRepository exerciseRepository) {
		 this.exerciseRepository = exerciseRepository;
	 }

    public List<Exercise> saveExercises(List<Exercise> exercises) {
        exerciseRepository.save(exercises);
        return exercises;
    }


}