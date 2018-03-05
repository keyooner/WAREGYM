package com.waregym.classesJava;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import com.waregym.classesJava.Exercise;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Training{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@OneToMany
	private List<Exercise> exercises;
	
	private String name;

	//private Date date;
	
	public Training() {
		this.name = "Ninguno";
	}
	
	public Training(String type) {
		this.name = type;
		exercises = new ArrayList<Exercise>();
		}
	
	//public Training(Date date, List<Exercise> exercises) {

		//this.date = date;
		//this.exercises = exercises;
	//}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Exercise> getExercises() {
		return exercises;
	}

	public void setExercises(List<Exercise> exercises2) {
		this.exercises = exercises2;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	//public Date getDate() {
	//	return date;
	//}

	//public void setDate(Date date) {
	//	this.date = date;
	//}
	
}
