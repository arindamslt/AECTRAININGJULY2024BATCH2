package com.arindam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arindam.entity.Order;
import com.arindam.service.OrderService;

@RestController//@Controller+ResponseBody
@RequestMapping("/order")
public class OrderController {
	@Autowired
private OrderService oservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Order o)
	{
		String msg="DATA INSERTED SUCCESSFULLY";
		oservice.addData(o);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Order>> getData()
	{
		List<Order> olist=oservice.getData();
		return new ResponseEntity<List<Order>>(olist,HttpStatus.OK);
		
	}
	@GetMapping("/fetch/{oid}")
	public ResponseEntity<Order> findByOrderId(@PathVariable String oid)
	{
		Order o=oservice.findByOrderId(oid);
		return new ResponseEntity<Order>(o,HttpStatus.OK);
	}
	@DeleteMapping("/del/{oid}")
	public ResponseEntity<String> deleteData(@PathVariable String oid)
	{
		String msg1="DATA DELETED SUCEESFULLY";
		oservice.deleteData(oid);
		return new ResponseEntity<String>(msg1,HttpStatus.OK);
	}
	@PutMapping("/upd/{oid}")
	public ResponseEntity<Order> updateData(@PathVariable String oid,@RequestBody Order ord)
	{
		Order o=oservice.updateData(oid, ord);
		return new ResponseEntity<Order>(o,HttpStatus.OK);
	}
}
