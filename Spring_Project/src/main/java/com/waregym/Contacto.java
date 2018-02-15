package com.waregym;

public class Contacto {
	
	private String nombre;
	private long numero;
	private String email;
	private String mensaje;
	
	public Contacto(String nombre, long numero, String email, String mensaje) {
		this.nombre = nombre;
		this.numero = numero;
		this.email = email;
		this.mensaje = mensaje;
	}
	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
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
	
	public long getNumero() {
		return numero;
	}
	
	public void setNumero(long numero) {
		this.numero = numero;
	}
}
