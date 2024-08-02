package com.arindam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.arindam.entity.Register;
import com.arindam.service.RegisterService;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins="http://localhost:3000/")
public class RegisterController {
	@Autowired
private RegisterService rservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Register fd)
	{
		String msg="REGISTRATION SUCCESSFULLY";
		rservice.addData(fd);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Register>> getData()
	{
		List<Register> flist=rservice.getData();
		return new ResponseEntity<List<Register>>(flist,HttpStatus.OK);
	}
	@GetMapping("/login/{uname}/{pass}")
	public ResponseEntity<String> checkLogin(@PathVariable String uname,@PathVariable String pass)
	{
		String msg1="LOGIN SUCCESSFULL";
		String msg2="LOGIN FAILURE";
		Register rs=rservice.checkLogin(uname, pass);
		if(rs!=null)
		{
			return new ResponseEntity<String>(msg1,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>(msg2,HttpStatus.OK);
		}
	}
}
