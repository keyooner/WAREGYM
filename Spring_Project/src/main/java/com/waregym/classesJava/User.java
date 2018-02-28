package com.waregym.classesJava;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private Integer type;
	private String name;
	private String email;
	private String password;
	
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;

	@ManyToMany
	private List<Activity> activities;
	
	public User() {}
	
	public User(Long id, Integer type, String name, String email, String password) {
		super();
		this.id = id;
		this.type = type;
		this.name = name;
		this.email = email;
		this.password = password;
		this.activities = new ArrayList<Activity>();
		
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	 public List<Activity> getActivitiesUser() {
		return activities;
	}

	public void setActivitiesUser(List<Activity> activities) {
		this.activities = activities;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
}
