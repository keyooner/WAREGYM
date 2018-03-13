package com.waregym.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.waregym.classesJava.Comment;
import com.waregym.repositories.CommentsRepository;

@Service
public class CommentService {
	
	private final CommentsRepository commentsRepository;
	
	 @Autowired
	 public CommentService(CommentsRepository productRepository) {
		 this.commentsRepository = productRepository;
	 }
	 
    public Comment findOneById(long id) {
        return commentsRepository.findById(id);
    }

    public List<Comment> findAllComments() {
        return commentsRepository.findAll();
    }

    public void saveComment(Comment comment) {
        commentsRepository.save(comment);
    }


}
