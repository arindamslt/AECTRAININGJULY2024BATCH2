package com.arindam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arindam.entity.Food;

import com.arindam.service.FoodService;

@RestController
@RequestMapping("/food")
@CrossOrigin(origins="http://localhost:3000/")
public class FoodController {
	@Autowired
private FoodService fservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Food fd)
	{
		String msg="FOOD ADDED SUCCESSFULLY";
		fservice.addData(fd);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Food>> getData()
	{
		List<Food> flist=fservice.getData();
		return new ResponseEntity<List<Food>>(flist,HttpStatus.OK);
	}
	@GetMapping("/fetch/{fid}")
	public ResponseEntity<Food> findByFoodId(@PathVariable String fid)
	{
		Food f=fservice.findByFoodid(fid);
		return new ResponseEntity<Food>(f,HttpStatus.OK);
	}
	@DeleteMapping("/del/{fid}")
	public ResponseEntity<String> deleteData(@PathVariable String fid)
	{
		String msg1="DATA DELETED SUCEESFULLY";
		fservice.deleteData(fid);
		return new ResponseEntity<String>(msg1,HttpStatus.OK);
	}
	@PutMapping("/upd/{fid}")
	public ResponseEntity<Food> updateData(@PathVariable String fid,@RequestBody Food fd)
	{
		Food f=fservice.updateData(fid,fd);
		return new ResponseEntity<Food>(f,HttpStatus.OK);
	}
}
