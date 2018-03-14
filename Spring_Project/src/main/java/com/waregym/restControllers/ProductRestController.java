package com.waregym.restControllers;

import com.waregym.classesJava.Product;
import com.waregym.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductRestController {

    private final ProductService productService;

    @Autowired
    public ProductRestController(ProductService productService) {
        this.productService = productService;
    }

    @RequestMapping(value = "/productos", method = RequestMethod.GET)
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.findAllProducts();

        if (products != null) {
        	return new ResponseEntity<>(products, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }
    
    @RequestMapping(value = "/productos/{id}", method = RequestMethod.GET)
    public ResponseEntity<Product> getProduct(@PathVariable long id) {
        Product product = productService.findOneById(id);

        if (product != null) {
        	return new ResponseEntity<>(product, HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }   
    }

    @RequestMapping(value = "/productos", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Product newProduct(@RequestBody Product newProduct) {
        productService.saveProduct(newProduct);
        return newProduct;
    }

    @RequestMapping(value = "/productos/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Product> deleteProduct(@PathVariable long id) {
        Product product = productService.findOneById(id);

        if (product != null) {
        	productService.deleteProduct(productService.findOneById(id));
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }

    /*@RequestMapping(value = "/productos/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product updatedProduct) {
        Product product = productService.findOneById(id);

        if (product == null && updatedProduct == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        updatedProduct.setId(id);
        productService.saveProduct(updatedProduct);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }*/
}