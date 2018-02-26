package com.waregym.classesJava;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Activity {
	
	@Id
	private String name;
	
	private String[] images;
	private String description;
	private String development;
	private String benefit;
	
	
	@ManyToMany(mappedBy="activities")
	 private List<User> users;	 
	
	public Activity() {}
	
	public Activity(String name, String image1, String image2, String image3, 
		String description, String development, String benefit) {
		
		this.name = name;
		this.images = new String[3];
		this.images[0] = image1;
		this.images[1] = image2;
		this.images[2] = image3;
		this.description = description;
		this.development = development;
		this.benefit = benefit;
		this.users = new ArrayList<>();	
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String[] getImages() {
		return images;
	}

	public void setImages(String[] images) {
		this.images = images;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDevelopment() {
		return development;
	}

	public void setDevelopment(String development) {
		this.development = development;
	}

	public String getBenefit() {
		return benefit;
	}

	public void setBenefit(String benefit) {
		this.benefit = benefit;
	}
	
	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}
	
}
