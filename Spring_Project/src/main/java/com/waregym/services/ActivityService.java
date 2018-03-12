package com.waregym.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.waregym.classesJava.Activity;
import com.waregym.repositories.ActivityRepository;

@Service
public class ActivityService {
	
	private final ActivityRepository activityRepository;
	
	 @Autowired
	 public ActivityService(ActivityRepository productRepository) {
		 this.activityRepository = productRepository;
	 }
	 
    public Activity findOneById(long id) {
        return activityRepository.findById(id);
    }

    public List<Activity> findAllActivities() {
        return activityRepository.findAll();
    }

    public void saveActivity(Activity activity) {
        activityRepository.save(activity);
    }

    public void deleteActivity(Activity activity) {
        activityRepository.delete(activity);
    }

}
