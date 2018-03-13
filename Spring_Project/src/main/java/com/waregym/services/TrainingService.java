package com.waregym.services;


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

    public void saveService(Training training) {
        trainingRepository.save(training);
    }

}