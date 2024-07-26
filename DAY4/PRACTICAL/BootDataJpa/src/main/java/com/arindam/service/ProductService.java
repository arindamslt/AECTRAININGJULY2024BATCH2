package com.arindam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arindam.entity.Product;
import com.arindam.repository.ProductRepository;

@Service//@Component+Transaction Management
public class ProductService {
	@Autowired
private ProductRepository prepo;
	public void addData(Product p)
	{
		prepo.save(p);
	}
	public List<Product> getData()
	{
		return prepo.findAll();
	}
	public Product findByPid(String pid)
	{
		return prepo.findById(pid).orElse(null);
	}
	public void deleteData(String pid)
	{
		Product pds=prepo.findById(pid).orElse(null);
		if(pds!=null)
		{
			prepo.delete(pds);
		}
	}
	public void updateData(String pid)
	{
		Product pds=prepo.findById(pid).orElse(null);
		if(pds!=null)
		{
			pds.setPname("LAPTOP");
			pds.setPqty(15);
			pds.setPrice(45000.00);
			prepo.save(pds);
		}
	}
	public List<Product> getPname(String pname)
	{
		return prepo.getPname(pname);
	}
}
