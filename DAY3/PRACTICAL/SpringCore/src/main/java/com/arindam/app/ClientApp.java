package com.arindam.app;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.arindam.bean.Customer;
import com.arindam.bean.Employee;
import com.arindam.config.SpringConfig;

public class ClientApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//READING THE SPRING CONTAINETR OBJECT
AnnotationConfigApplicationContext ac=new AnnotationConfigApplicationContext(SpringConfig.class);
    //Customer cst=(Customer)ac.getBean("cs");
Employee e=(Employee)ac.getBean("emp");
   // System.out.println(cst);
System.out.println(e);
	}

}
