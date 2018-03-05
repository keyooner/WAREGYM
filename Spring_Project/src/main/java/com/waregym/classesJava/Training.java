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
		this.exercises = new ArrayList<Exercise>();
		case "Principiante": 
			exercises.add(new Exercise("Flexiones",0,10));
			exercises.add(new Exercise("Press de Banca", 50, 5));
			exercises.add(new Exercise("Abdominales", 0, 15));
			break;
		case "Medio": 
			exercises.add(new Exercise("Flexiones",0,20));
			exercises.add(new Exercise("Press de Banca", 70, 7));
			exercises.add(new Exercise("Pesas", 10, 5));
			exercises.add(new Exercise("Abdominales", 0, 15));
			break;
		case "Avanzado": 
			exercises = new ArrayList<Exercise>();
			break;
		case "Experto": 
			exercises.add(new Exercise("Flexiones",20,10));
			exercises.add(new Exercise("Press de Banca", 150, 10));
			exercises.add(new Exercise("Levantar a Adri", 70, 1));
			exercises.add(new Exercise("Piernas", 60, 20));
			exercises.add(new Exercise("Barras", 10, 10));
			exercises.add(new Exercise("Press de pectoral", 40, 10));
			break;
		}
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
