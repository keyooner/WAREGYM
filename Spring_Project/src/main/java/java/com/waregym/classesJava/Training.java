package com.waregym.classesJava;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Training {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Exercise> exercises;

	private Date date;
	
	public Training() {}
	
	public Training(Date date, List<Exercise> exercises) {

		this.date = date;
		this.exercises = exercises;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Exercise> getExercises() {
		return exercises;
	}

	public void setExercises(List<Exercise> exercises) {
		this.exercises = exercises;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
}
