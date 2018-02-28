package com.waregym.classesJava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String name;
	private String description;
	private Double value;
	private String link;
	//private ImageClass image;
	
	
	public Product() {}
	
	


	
	

	
}
