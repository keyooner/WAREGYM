package com.waregym.classesJava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Comment {
	
	public interface Basic {
	}
	
	@JsonView(Basic.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@JsonView(Basic.class)
	private String name;
	
	@JsonView(Basic.class)
	private String email;
	
	@JsonView(Basic.class)
	private long number;
	
	@JsonView(Basic.class)
	private String message;

	public Comment() {}

	public Comment(String name, String email, long number, String message) {
		super();
		this.name = name;
		this.email = email;
		this.number = number;
		this.message = message;
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
	
	public long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "Anuncio [name=" + name + ", email=" + email + ", number=" + number + " ,message=" + message + "]";
	}

}
