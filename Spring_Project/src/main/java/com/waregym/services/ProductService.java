package com.waregym.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.waregym.classesJava.Product;
import com.waregym.repositories.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product findOneById(long id) {
        return productRepository.findOne(id);
    }

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public void saveProduct(Product product) {
        productRepository.save(product);
    }

    public void deleteProduct(Product product) {
        productRepository.delete(product);
    }

    public Page<Product> findAllProductPage(PageRequest pageRequest) {
        return productRepository.findAll(pageRequest);
    }

    public void updateProduct(Product product) {
        productRepository.save(product);
    }
}
