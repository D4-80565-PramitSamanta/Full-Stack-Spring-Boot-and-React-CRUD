package com.pramit.fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pramit.fullstack.exception.UserNotFoundExec;
import com.pramit.fullstack.model.User;
import com.pramit.fullstack.repository.UserRepo;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserCon {
	
	@Autowired
	private UserRepo userepo;
	
	
	
	@PostMapping("/user")
	User newUser(@RequestBody User user)
	{
		return userepo.save(user);
	}
	
	
	@GetMapping("/users")
	List<User> getAllUsers()
	{
		List<User> all = userepo.findAll();
		return all;
	}
	
	@GetMapping("/user/{xyz}")
	User getUser(@PathVariable long xyz)
	{
		return userepo.findById(xyz).
				orElseThrow(()->new UserNotFoundExec(xyz));
	}
	
	@PutMapping("/user/{abc}")
	User putUser(@PathVariable long abc,  @RequestBody User u)
	{
		User temp = getUser(abc);
		temp.setEmail(u.getEmail());
		temp.setName(u.getName());
		temp.setUsername(u.getUsername());
		return userepo.save(temp);
	}
	
	@DeleteMapping("/user/{did}")
	String deleteUser(@PathVariable long did)
	{
		User temp = getUser(did);
		userepo.delete(temp);
		return "User with id " + did + " has been deleted !!!";
	}
}
