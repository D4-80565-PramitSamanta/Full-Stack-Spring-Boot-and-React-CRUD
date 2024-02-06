package com.pramit.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pramit.fullstack.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
