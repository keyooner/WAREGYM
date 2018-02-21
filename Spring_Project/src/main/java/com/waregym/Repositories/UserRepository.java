package com.waregym.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.waregym.ClassesJava.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
}
