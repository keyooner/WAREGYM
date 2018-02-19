package com.waregym.ClasesJava;

public class Clase {
	
	private String nombre;
	private String[] imagenes;
	private String descripcion;
	private String desarrollo;
	private String beneficios;
	
	public Clase() {
		this.imagenes = new String[3];
	}
	
	public Clase(String nombre, String imagen1, String imagen2, String imagen3, 
		String descripcion, String desarrollo, String beneficios) {
		this.nombre = nombre;
		this.imagenes = new String[3];
		this.imagenes[0] = imagen1;
		this.imagenes[1] = imagen2;
		this.imagenes[2] = imagen3;
		this.descripcion = descripcion;
		this.desarrollo = desarrollo;
		this.beneficios = beneficios;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String[] getImagenes() {
		return imagenes;
	}

	public void setImagenes(String[] imagenes) {
		this.imagenes = imagenes;
	}
	
	public void setImagenes(String imagen1, String imagen2, String imagen3) {
		this.imagenes[0] = imagen1;
		this.imagenes[1] = imagen2;
		this.imagenes[2] = imagen3;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getDesarrollo() {
		return desarrollo;
	}

	public void setDesarrollo(String desarrollo) {
		this.desarrollo = desarrollo;
	}

	public String getBeneficios() {
		return beneficios;
	}

	public void setBeneficios(String beneficios) {
		this.beneficios = beneficios;
	}

}
