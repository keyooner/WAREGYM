package com.waregym.classesJava;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Product {
	
	public interface Basic {
	}
	
	@JsonView(Basic.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@JsonView(Basic.class)
	private String type;
	
	@JsonView(Basic.class)
	private String name;
	
	@JsonView(Basic.class)
	private Double value;
	
	@JsonView(Basic.class)
	private String link;
	
	@JsonView(Basic.class)
	private String image;
	
	public Product() {}
	
	public Product(String type, String name, Double value, String link) {
		super();
		this.type = type;
		this.name = name;
		this.value = value;
		this.link = link;
	}
	
	public Product(String type, String name, Double value, String link, String image) {
		super();
		this.type = type;
		this.name = name;
		this.value = value;
		this.link = link;
		this.image = image;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
}
