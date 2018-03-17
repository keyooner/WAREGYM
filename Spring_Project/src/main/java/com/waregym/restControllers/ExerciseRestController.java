package com.waregym.restControllers;

import com.waregym.classesJava.Exercise;
import com.waregym.services.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ExerciseRestController {

    private final ExerciseService exerciseService;

    @Autowired
    public ExerciseRestController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @RequestMapping(value = "/ejercicios", method = RequestMethod.GET)
    public ResponseEntity<List<Exercise>> getAllExercises() {
        List<Exercise> exercises = exerciseService.findAllExercises();

        if (exercises != null) {
        	return new ResponseEntity<>(exercises, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }
    
    @RequestMapping(value = "/ejercicio/{id}", method = RequestMethod.GET)
    public ResponseEntity<Exercise> getExercise(@PathVariable long id) {
    	Exercise exercise = exerciseService.findOneById(id);

        if (exercise != null) {
        	return new ResponseEntity<>(exercise, HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }   
    }

    @RequestMapping(value = "/ejercicios", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Exercise newExercise(@RequestBody Exercise newExercise) {
    	exerciseService.saveExercise(newExercise);
        return newExercise;
    }

    /*@RequestMapping(value = "/ejercicios/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Exercise> deleteExercise(@PathVariable long id) {
        Exercise Exercise = exerciseService.findOneById(id);

        if (Exercise != null) {
        	exerciseService.deleteExercise(exerciseService.findOneById(id));
            return new ResponseEntity<>(Exercise, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }

    /*@RequestMapping(value = "/ejercicios/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Exercise> updateExercise(@PathVariable long id, @RequestBody Exercise updatedExercise) {
        Exercise Exercise = ExerciseService.findOneById(id);

        if (Exercise == null && updatedExercise == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        updatedExercise.setId(id);
        ExerciseService.saveExercise(updatedExercise);
        return new ResponseEntity<>(updatedExercise, HttpStatus.OK);
    }*/
}