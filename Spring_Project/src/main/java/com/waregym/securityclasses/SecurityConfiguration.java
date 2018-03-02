package com.waregym.securityclasses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.waregym.repositories.UserRepositoryAuthenticationProvider;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    public UserRepositoryAuthenticationProvider authenticationProvider;

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
        http.authorizeRequests().antMatchers("/activity_template").permitAll();
        

        // Private pages (all other pages)
        http.authorizeRequests().antMatchers("/clases/añadir_clase").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/clases/inscripcion").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/entrenamientos/entrenamiento").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/entrenamientos/principiante").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/entrenamientos/medio").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/entrenamientos/avanzado").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/entrenamientos/experto").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/productos/nuevoProducto").permitAll();
        http.authorizeRequests().antMatchers("/home").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/admin").hasAnyRole("ADMIN");

        // Login form
        http.formLogin().loginPage("/login");
        http.formLogin().usernameParameter("username");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/");
        http.formLogin().failureUrl("/loginerror");

        // Logout
        http.logout().logoutUrl("/logout");
        http.logout().logoutSuccessUrl("/");
        
        //Disable CSRF at the moment
        //http.csrf().disable();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
        // Database authentication provider
        auth.authenticationProvider(authenticationProvider);
    }
}
