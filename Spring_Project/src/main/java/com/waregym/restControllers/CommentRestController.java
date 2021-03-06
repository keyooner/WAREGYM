package com.waregym.restControllers;

import com.waregym.classesJava.Comment;
import com.waregym.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CommentRestController {

    private final CommentService commentService;

    @Autowired
    public CommentRestController(CommentService commentService) {
        this.commentService = commentService;
    }

    @RequestMapping(value = "/contactos", method = RequestMethod.GET)
    public ResponseEntity<List<Comment>> getAllComments() {
        List<Comment> comments = commentService.findAllComments();

        if (comments != null) {
        	return new ResponseEntity<>(comments, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }
    
    @RequestMapping(value = "/contactos/{id}", method = RequestMethod.GET)
    public ResponseEntity<Comment> getComment(@PathVariable long id) {
        Comment comment = commentService.findOneById(id);

        if (comment != null) {
        	return new ResponseEntity<>(comment, HttpStatus.OK);
        }
        else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }   
    }

    @RequestMapping(value = "/contactos", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Comment newComment(@RequestBody Comment newComment) {
        commentService.saveComment(newComment);
        return newComment;
    }

    @RequestMapping(value = "/contactos/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Comment> deleteComment(@PathVariable long id) {
        Comment comment= commentService.findOneById(id);

        if (comment != null) {
        	commentService.deleteComment(commentService.findOneById(id));
        	return new ResponseEntity<>(comment, HttpStatus.OK);
        } else {
        	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
    }

    @RequestMapping(value = "/contactos/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Comment> updateProduct(@PathVariable long id, @RequestBody Comment updatedComment) {
        Comment comment = commentService.findOneById(id);

        if (comment == null && updatedComment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        updatedComment.setId(id);
        commentService.saveComment(updatedComment);
        return new ResponseEntity<>(updatedComment, HttpStatus.OK);
    }
}