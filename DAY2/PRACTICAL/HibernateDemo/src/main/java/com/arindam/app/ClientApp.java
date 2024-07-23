package com.arindam.app;

import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.arindam.entity.Employee;
//import com.arindam.entity.Product;

public class ClientApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
   EntityTransaction tx=null;
   //READING THE PERSISTENCE.XML FILE
   EntityManagerFactory emf=Persistence.createEntityManagerFactory("AppDB");
   //create table update table 
   EntityManager em=emf.createEntityManager();
   tx=em.getTransaction();//TRANSACTION CREATED
   tx.begin();//TRANSACTION BEGIN
   //Product pd1=new Product("P1","TV",5,25000.00);
   Employee e1=new Employee();
   Employee e2=new Employee();
   e1.setEname("ROBIN");
   e1.setEdesig("MANAGER");
   e1.setSal(50000.00);
   e1.setJoindt(new Date());
   e1.setWorkhr(new Date());
   e2.setEname("ARUP");
   e2.setEdesig("MANAGER");
   e2.setSal(65000.00);
   e2.setJoindt(new Date());
   e2.setWorkhr(new Date());
   //em.persist(pd1);//DATA INSERTED
   em.persist(e1);
   em.persist(e2);
   tx.commit();//PERMANENTLY SAVE THE DATA
   emf.close();
   
   
	}

}
