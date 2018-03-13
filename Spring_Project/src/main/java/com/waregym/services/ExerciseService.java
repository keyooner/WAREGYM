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
	 
    public Comment findOneById(long id) {
        return commentsRepository.findById(id);
    }

    public List<Comment> findAllComments() {
        return commentsRepository.findAll();
    }

    public void saveComment(Comment comment) {
        commentsRepository.save(comment);
    }


}