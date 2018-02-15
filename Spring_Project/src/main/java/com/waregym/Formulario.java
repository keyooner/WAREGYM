package com.waregym;

public class Formulario {
	
	private String nombre;
	private String movil;
	private String email;
	private String mensaje;
	
	public Formulario (String nombre, String movil, String email, String mensaje) {
		this.setNombre(nombre);
		this.setMovil(movil);
		this.setEmail(email);
		this.setMensaje(mensaje);
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getMovil() {
		return movil;
	}

	public void setMovil(String movil) {
		this.movil = movil;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	
	
}
