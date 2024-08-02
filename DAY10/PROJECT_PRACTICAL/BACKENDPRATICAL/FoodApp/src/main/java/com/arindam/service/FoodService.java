package com.arindam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arindam.entity.Food;

import com.arindam.repository.FoodRepository;

@Service
public class FoodService {
	@Autowired
	private FoodRepository frepo;
public void addData(Food fd)
{
	frepo.save(fd);
	
}
public List<Food> getData()
{
	return frepo.findAll();
}
public Food findByFoodid(String fid)
{
	Food f=frepo.findById(fid).orElse(null);
	return f;
}
public void deleteData(String fid)
{
	Food f=frepo.findById(fid).orElse(null);
	if(f!=null)
	{
		frepo.delete(f);
	}
}
public Food updateData(String fid,Food fd)
{
	Food f=frepo.findById(fid).orElse(null);
	if(f!=null)
	{
		f.setFid(fid);
		f.setFname(fd.getFname());
		f.setPrice(fd.getPrice());
		frepo.save(f);
	}
	return f;
}
}
