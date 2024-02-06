package com.pramit.fullstack.exception;

public class UserNotFoundExec extends RuntimeException {
	
	public UserNotFoundExec(long id)
	{
		super("User with id " + id + " was not found");
	}
}
