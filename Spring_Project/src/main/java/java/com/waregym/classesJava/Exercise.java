package com.waregym.classesJava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Exercise {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String name;
	private int weight;
	private int reps;
	
	public Exercise() {}


	public Exercise(String name, int weight, int reps) {
		
		this.name = name;
		this.weight = weight;
		this.reps = reps;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getReps() {
		return reps;
	}

	public void setReps(int reps) {
		this.reps = reps;
	}
	
	

	
}
