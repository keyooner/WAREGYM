package com.waregym.ClassesJava;

public class Form {
	
	private String name;
	private String number;
	private String email;
	private String text;
	
	
	public Form(String name, String number, String email, String text) {
		super();
		this.name = name;
		this.number = number;
		this.email = email;
		this.text = text;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getNumber() {
		return number;
	}


	public void setNumber(String number) {
		this.number = number;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
	}
	
}
