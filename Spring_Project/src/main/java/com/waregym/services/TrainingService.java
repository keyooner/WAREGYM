package com.waregym.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.waregym.classesJava.Training;
import com.waregym.repositories.TrainingRepository;

@Service
public class TrainingService {
	
	private final TrainingRepository trainingRepository;
	
	 @Autowired
	 public TrainingService(TrainingRepository trainingRepository) {
		 this.trainingRepository = trainingRepository;
	 }
	 
	 public List<Training> findAllTrainings() {
         return trainingRepository.findAll();
     }
	 
	 public Training findOneById(long id) {
	        return trainingRepository.findOne(id);
	 }

     public void saveTraining(Training training) {
         trainingRepository.save(training);
     }

}