package com.waregym.restControllers;

import com.waregym.classesJava.User;
import com.waregym.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserRestController {

    private final UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUsers();

        if (users != null) {
        	return new ResponseEntity<>(users, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }
    
    @RequestMapping(value = "/user/{name}", method = RequestMethod.GET)
    public ResponseEntity<User> getUser(@PathVariable String name) {
        User product = userService.findOneByName(name);

        if (product != null) {
        	return new ResponseEntity<>(product, HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }   
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public User newUser(@RequestBody User newUser) {
        userService.saveUser(newUser);
        return newUser;
    }

    /*@RequestMapping(value = "/productos/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Product> deleteUser(@PathVariable long id) {
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