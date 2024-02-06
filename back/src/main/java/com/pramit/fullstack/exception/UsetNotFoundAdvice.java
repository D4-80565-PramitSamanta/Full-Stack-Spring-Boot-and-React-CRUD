package com.pramit.fullstack.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class UsetNotFoundAdvice {

	@ResponseBody
	@ResponseStatus
	@ExceptionHandler(UserNotFoundExec.class)
	Map<String,String> excepHandler(UserNotFoundExec exec)
	{
		Map<String,String> errorMap = new HashMap<String, String>();
		errorMap.put("errorMessage", exec.getMessage());
		
		return errorMap;
	}
}
