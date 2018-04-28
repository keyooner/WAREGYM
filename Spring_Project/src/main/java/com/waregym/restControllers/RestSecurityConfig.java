package com.waregym.restControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.waregym.repositories.UserRepositoryAuthProvider;

@Configuration
@Order(1)
public class RestSecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	public UserRepositoryAuthProvider userRepoAuthProvider;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.antMatcher("/api/**");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/logIn").authenticated();
		
		// URLs that need authentication to access to it
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/clases/").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/clases/{id}").hasRole("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/contactos").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/contacto/{id}").hasRole("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/exercises").hasAnyRole("ADMIN","USER","TEACH");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/exercise/{id}").hasAnyRole("ADMIN","USER","TEACH");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/exercises").hasAnyRole("ADMIN","USER","TEACH");
		
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/productos/").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/productos/{id}").hasRole("ADMIN");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/entrenamientos").hasAnyRole("ADMIN","USER","TEACH");
		//http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/entrenamiento/{userName}").hasAnyRole("ADMIN","USER","TEACH");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/entrenamientos").hasAnyRole("ADMIN","USER","TEACH");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/users").hasRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/user/{name}").hasRole("ADMIN");
		
		// Other URLs can be accessed without authentication
		http.authorizeRequests().anyRequest().permitAll();
		
		//Disable CSRF at the moment
		http.csrf().disable();
		
		// Use Http Basic Authentication
		http.httpBasic();

		// Do not redirect when logout
		http.logout().logoutSuccessUrl("/login");
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// Database authentication provider
		auth.authenticationProvider(userRepoAuthProvider);
	}

	
}