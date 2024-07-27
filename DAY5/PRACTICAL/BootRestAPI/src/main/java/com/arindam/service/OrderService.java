package com.arindam.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arindam.entity.Order;
import com.arindam.repository.OrderRepository;

@Service//@Component+Transaction Management
public class OrderService {
	@Autowired
private OrderRepository orepo;
	public void addData(Order o)
	{
		orepo.save(o);
	}
	public List<Order> getData()
	{
		return orepo.findAll();
	}
	public Order findByOrderId(String oid)
	{
		Order o=orepo.findById(oid).orElse(null);
		return o;
	}
	public void deleteData(String oid)
	{
		Order o=orepo.findById(oid).orElse(null);
		if(o!=null)
		{
			orepo.delete(o);
		}
	}
	public Order updateData(String oid,Order ord)
	{
		Order o=orepo.findById(oid).orElse(null);
		if(o!=null)
		{
			o.setOid(oid);
			o.setOqty(ord.getOqty());
			o.setPrice(ord.getPrice());
			orepo.save(o);
		}
		return o;
	}
}
