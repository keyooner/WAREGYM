package com.waregym.restControllers;

import com.waregym.classesJava.Training;
import com.waregym.services.TrainingService;
import com.waregym.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TrainingRestController {

    private final TrainingService trainingService;
    private final UserService userService;

    @Autowired
    public TrainingRestController(TrainingService trainingService, UserService userService) {
        this.trainingService = trainingService;
        this.userService = userService;
    }

    @RequestMapping(value = "/entrenamientos/{userName}", method = RequestMethod.GET)
    public ResponseEntity<Training> getTrainingOfUser(@PathVariable String userName) {
        Training training = userService.findOneByName(userName).getTraining();

        if (training != null) {
        	return new ResponseEntity<Training>(training, HttpStatus.OK);
        } else {
        	return new ResponseEntity<Training>(HttpStatus.NOT_FOUND);
        }   
    }
    
    @RequestMapping(value = "/entrenamientos", method = RequestMethod.GET)
    public ResponseEntity<List<Training>> getAllTrainings() {
        List<Training> trainings = trainingService.findAllTrainings();

        if (trainings != null) {
        	return new ResponseEntity<List<Training>>(trainings, HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<List<Training>>(HttpStatus.NOT_FOUND);
        }   
    }
    
    /*@RequestMapping(value = "/entrenamientos/{id}", method = RequestMethod.GET)
    public ResponseEntity<Training> getTraining(@PathVariable long id) {
        Training training = trainingService.findOneById(id);

        if (training != null) {
        	return new ResponseEntity<>(training, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }*/
    
    @RequestMapping(value = "/entrenamientos", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Training newTraining(@RequestBody Training newTraining) {
        trainingService.saveTraining(newTraining);
        return newTraining;
    }
    
    /*@RequestMapping(value = "/entrenamientos/{userName}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.CREATED)
    public Training newTrainingForUser(@RequestBody Training newTraining, @PathVariable String userName) {
        User user = userService.findOneByName(userName);
    	user.setTraining(newTraining);
    	trainingService.saveTraining(newTraining);
        return newTraining;
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