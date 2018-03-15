package com.waregym.classesJava;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.waregym.classesJava.Activity.Basic;

@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
@Entity
public class User {

	public interface Basic {
	}
	
	public interface Activities {
	}
	
	public interface UserTraining{
	}
	
	@Id
	@JsonView(Basic.class)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@JsonView(Basic.class)
	private String name;
    
	@JsonView(UserTraining.class)
	@OneToOne(cascade = {CascadeType.ALL})
    private Training training;
	
	@JsonView(Basic.class)
	private String passwordHash;
	
	@JsonView(Activities.class)
	@ManyToMany
	private List<Activity> activities;

	@JsonView(Basic.class)
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;

	public User() {
	}

	public User(String name, String password, String... roles) {
		this.name = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.training = new Training();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Activity> getActivities() {
		return activities;
	}

	public void setActivities(List<Activity> activities) {
		this.activities = activities;
	}

	public Training getTraining() {
		return training;
	}

	public void setTraining(Training training) {
		this.training = training;
	}
}