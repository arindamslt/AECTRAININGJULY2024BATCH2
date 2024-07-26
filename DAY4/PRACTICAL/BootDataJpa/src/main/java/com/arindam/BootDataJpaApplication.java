package com.arindam;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.arindam.entity.Product;
import com.arindam.service.ProductService;

@SpringBootApplication
public class BootDataJpaApplication implements CommandLineRunner {
	@Autowired
private ProductService pservice;
	public static void main(String[] args) {
		SpringApplication.run(BootDataJpaApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("INSERT DATA AND TABLE CREATION==");
		Product p=new Product("P2","REFRIGERATOR",6,28000.00);
		//pservice.addData(p);
		System.out.println("DELETE DATA=====");
		//pservice.deleteData("P2");
		System.out.println("UPDATE DATA====");
		//pservice.updateData("P1");
		System.out.println("SEARCHING DATA BY PRODUCT NAME");
		List<Product> plist1=pservice.getPname("LAPTOP");
		plist1.stream().forEach(System.out::println);
		/*System.out.println("DISPLAY THE DATA=====");
		List<Product> plist=pservice.getData();
		plist.stream().forEach(System.out::println);
		System.out.println("SEARCH DATA BASED ON PID====");
		Product pds=pservice.findByPid("P1");
		System.out.println(pds);*/
	}

}
