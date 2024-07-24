package com.arindam.app;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.arindam.entity.Account;
import com.arindam.entity.Customer;
import com.arindam.entity.Employee;
import com.arindam.entity.Student;
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
   //em.persist(e1);
   //em.persist(e2);
  /* Account ac1=new Account("100",15000.00);
   Account ac2=new Account("101",20000.00);
   Customer cs1=new Customer("C1","AYAN",ac1);
   Customer cs2=new Customer("C2","AJOY",ac2);*/
   System.out.println("INSERT DATA===============");
   //Student sd1=new Student("1","RAMAN","ECE");
   Student sd2=new Student("2","SUMAN","IT");
   Student sd3=new Student("3","RAMAN","CSE");
   Student sd4=new Student("4","RUPAM","IT");
  // em.persist(sd1);
  // em.persist(sd2);
   //em.persist(ac1);
  // em.persist(ac2);
  // em.persist(cs1);
  // em.persist(cs2);
  // em.persist(sd2);
  // em.persist(sd3);
  // em.persist(sd4);
   System.out.println("DELETE DATA=============");
   /*Student sds=em.find(Student.class,"2");//select * from student where rollno='2'
   if(sds!=null)
   {
	  
	   em.remove(sds);
	  
   }*/
   /*System.out.println("UPDATE DATA====");
   Student sds=em.find(Student.class,"1");
   if(sds!=null)
   {
	  sds.setSname("ALOKE");
	  sds.setSdept("CSE");
	  em.merge(sds);
	  
	  
   }*/
   System.out.println("FETCHING DATA===========");
   String jpql1="select s from Student s";
   Query query=em.createQuery(jpql1);
   List<Student> slist=query.getResultList();
   slist.stream().forEach(System.out::println);
   System.out.println("FIND OUT DATA OF CSE DEPT====");
   String hql="from Student where sdept=:v_sdept";
   Query query1=em.createQuery(hql);
   query1.setParameter("v_sdept","CSE");
   List<Student> slist1=query1.getResultList();
   slist1.stream().forEach(System.out::println);
   tx.commit();//PERMANENTLY SAVE THE DATA
   emf.close();
   
   
	}

}
