package com.waregym.restControllers;

import com.fasterxml.jackson.annotation.JsonView;
import com.waregym.classesJava.Activity;
import com.waregym.classesJava.Training;
import com.waregym.classesJava.Exercise;
import com.waregym.classesJava.User;
import com.waregym.repositories.TrainingRepository;
import com.waregym.services.ActivityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ActivitiesRestController {

    private final ActivityService activityService;

    @Autowired
    public ActivitiesRestController(ActivityService activityService) {
        this.activityService = activityService;
    }

    interface ActivityDetail extends Activity.Basic, Activity.Users, User.Basic, User.UserTraining, Training.Basic, Training.Exercises, Exercise.Basic {
	}
    
    @JsonView(ActivityDetail.class)
    @RequestMapping(value = "/clases", method = RequestMethod.GET)
    public ResponseEntity<List<Activity>> getAllActivities() {
        List<Activity> activities = activityService.findAllActivities();

        if (activities != null) {
        	return new ResponseEntity<>(activities, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @JsonView(ActivityDetail.class)
    @RequestMapping(value = "/clases/{id}", method = RequestMethod.GET)
    public ResponseEntity<Activity> getActivity(@PathVariable long id) {

    	Activity activity = activityService.findOneById(id);

        if (activity != null) {
        	return new ResponseEntity<>(activity, HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }   
    }

    @RequestMapping(value = "/clases", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Activity newActivity(@RequestBody Activity newActivity) {
    	activityService.saveActivity(newActivity);
        return newActivity;
    }

    @RequestMapping(value = "/clases/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Activity> deleteProduct(@PathVariable long id) {
        
    	Activity product = activityService.findOneById(id);
        if (product != null) {
        	activityService.deleteActivity(product);
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    /*
    @RequestMapping(value = "/productos/{id}", method = RequestMethod.PUT)
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