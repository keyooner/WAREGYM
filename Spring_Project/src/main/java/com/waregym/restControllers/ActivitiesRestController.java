package com.waregym.restControllers;

import com.waregym.classesJava.Activity;
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

    @RequestMapping(value = "/activities", method = RequestMethod.GET)
    public ResponseEntity<List<Activity>> getAllActivities() {
        List<Activity> activities = activityService.findAllActivities();

        if (activities != null) {
        	return new ResponseEntity<>(activities, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }
    
    @RequestMapping(value = "/activity/{id}", method = RequestMethod.GET)
    public ResponseEntity<Activity> getActivity(@PathVariable long id) {
    	Activity activity = activityService.findOneById(id);

        if (activity != null) {
        	return new ResponseEntity<>(activity, HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }   
    }

    @RequestMapping(value = "/activities/", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Activity newActivity(@RequestBody Activity newActivity) {
    	activityService.saveActivity(newActivity);
        return newActivity;
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