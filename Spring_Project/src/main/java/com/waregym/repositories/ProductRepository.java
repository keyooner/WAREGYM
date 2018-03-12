package com.waregym.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.waregym.classesJava.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
