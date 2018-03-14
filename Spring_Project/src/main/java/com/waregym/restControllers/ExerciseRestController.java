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

    @RequestMapping(value = "/exercises", method = RequestMethod.GET)
    public ResponseEntity<List<Exercise>> getAllExercises() {
        List<Exercise> exercises = exerciseService.findAllExercises();

        if (exercises != null) {
        	return new ResponseEntity<>(exercises, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }
    
    @RequestMapping(value = "/exercise/{id}", method = RequestMethod.GET)
    public ResponseEntity<Exercise> getExercise(@PathVariable long id) {
    	Exercise exercise = exerciseService.findOneById(id);

        if (exercise != null) {
        	return new ResponseEntity<>(exercise, HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }   
    }

    @RequestMapping(value = "/exercises", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Exercise newExercise(@RequestBody Exercise newExercise) {
    	exerciseService.saveExercise(newExercise);
        return newExercise;
    }

    /*@RequestMapping(value = "/productos/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Product> deleteProduct(@PathVariable long id) {
        Product product = productService.findOneById(id);

        if (product != null) {
        	productService.deleteProduct(productService.findOneById(id));
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }

    /*@RequestMapping(value = "/productos/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product updatedProduct) {
        Product product = productService.findOneById(id);

        if (product == null && updatedProduct == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        updatedProduct.setId(id);
        productService.saveProduct(updatedProduct);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }*/
}