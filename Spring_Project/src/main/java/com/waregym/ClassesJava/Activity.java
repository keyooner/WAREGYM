package com.waregym.ClassesJava;

public class Activity {

	private Integer id;
	private String name;
	private String[] images;
	private String description;
	private String development;
	private String benefit;
	
	public Activity() {
		this.images = new String[3];
	}
	
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
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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
}
