package com.waregym.securityclasses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.waregym.repositories.UserRepositoryAuthProvider;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    public UserRepositoryAuthProvider authenticationProvider;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	
    	// Public pages
        http.authorizeRequests().antMatchers("/").permitAll();
        http.authorizeRequests().antMatchers("/login").permitAll();
        http.authorizeRequests().antMatchers("/loginerror").permitAll();
        http.authorizeRequests().antMatchers("/logout").permitAll();
        http.authorizeRequests().antMatchers("/logout").permitAll();
        http.authorizeRequests().antMatchers("/waregym").permitAll();
        http.authorizeRequests().antMatchers("/productos").permitAll();
        http.authorizeRequests().antMatchers("/contacto").permitAll();
        http.authorizeRequests().antMatchers("/contacto_guardado").permitAll();
        http.authorizeRequests().antMatchers("/activity_template").permitAll();
        

        // Private pages (all other pages)
        http.authorizeRequests().antMatchers("/clases/añadir_clase").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/contactos").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/contacto/{id}").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/clases/inscripcion").hasAnyRole("USER","TEACH","ADMIN");
        http.authorizeRequests().antMatchers("/entrenamientos/entrenamiento").hasAnyRole("ADMIN","USER","TEACH");
        http.authorizeRequests().antMatchers("/entrenamientos/principiante").hasAnyRole("ADMIN","USER","TEACH");
        http.authorizeRequests().antMatchers("/entrenamientos/medio").hasAnyRole("ADMIN","USER","TEACH");
        http.authorizeRequests().antMatchers("/entrenamientos/avanzado").hasAnyRole("ADMIN","USER","TEACH");
        http.authorizeRequests().antMatchers("/entrenamientos/experto").hasAnyRole("ADMIN","USER","TEACH");
        http.authorizeRequests().antMatchers("/nuevoProducto").hasAnyRole("ADMIN");

        // Login form
        http.formLogin().loginPage("/login");
        http.formLogin().usernameParameter("username");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/profile");
        http.formLogin().failureUrl("/loginerror");

        // Logout
        http.logout().logoutUrl("/logout");
        http.logout().logoutSuccessUrl("/login");
        
        //Disable CSRF at the moment
        http.csrf().disable();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
        // Database authentication provider
        auth.authenticationProvider(authenticationProvider);
    }
}
