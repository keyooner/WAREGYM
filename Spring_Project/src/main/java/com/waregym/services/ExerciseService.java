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
	 
	 public List<Exercise> findAllExercises() {
	        return exerciseRepository.findAll();
	 }
	 
	 public Exercise findOneById(long id) {
	        return exerciseRepository.findOne(id);
	 }
	 
	 public void saveExercise(Exercise exercise) {
	        exerciseRepository.save(exercise);
	 }

     public List<Exercise> saveExercises(List<Exercise> exercises) {
    	 exerciseRepository.save(exercises);
         return exercises;
     }
     
     public void deleteExercise(Exercise exercise) {
    	 exerciseRepository.delete(exercise);
     }


}