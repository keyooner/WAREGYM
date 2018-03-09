package com.waregym.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.waregym.classesJava.Comment;

public interface CommentsRepository extends JpaRepository<Comment, Long> {

}