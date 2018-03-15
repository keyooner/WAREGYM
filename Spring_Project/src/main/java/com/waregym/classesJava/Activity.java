package com.waregym.classesJava;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


import com.fasterxml.jackson.annotation.JsonView;



@Entity
public class Activity {
	
	public interface Basic {
	}

	public interface Users {
	}
	
	@Id
	@JsonView(Basic.class)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(Basic.class)
	private String name;
	@JsonView(Basic.class)
	private String image1;
	@JsonView(Basic.class)
	private String image2;
	@JsonView(Basic.class)
	private String image3;
	@JsonView(Basic.class)
	private String description;
	@JsonView(Basic.class)
	private String development;
	@JsonView(Basic.class)
	private String benefit;
	@JsonView(Basic.class)
	private String[][] schedule;
	@JsonView(Basic.class)
	private int inscribed;
	
	@JsonView(Users.class)
	@ManyToMany(mappedBy="activities")
	private List<User> users;
	
	
	public Activity() {
		this.schedule = new String[5][3];
	}
	
	public Activity(String name, String description, String development, String benefit) {
		
		this.name = name;
		this.description = description;
		this.development = development;
		this.benefit = benefit;
		this.schedule = new String[5][3];
		this.inscribed = 0;
	}

	public int getInscribed() {
		return inscribed;
	}

	public void setInscribed(int inscribed) {
		this.inscribed = inscribed;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage1() {
		return image1;
	}

	public void setImage1(String image1) {
		this.image1 = image1;
	}

	public String getImage2() {
		return image2;
	}

	public void setImage2(String image2) {
		this.image2 = image2;
	}

	public String getImage3() {
		return image3;
	}

	public void setImage3(String image3) {
		this.image3 = image3;
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

	public String[][] getSchedule() {
		return schedule;
	}

	public void setSchedule(String[][] schedule) {
		this.schedule = schedule;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	
	
}
