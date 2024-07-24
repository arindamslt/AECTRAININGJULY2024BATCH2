package com.arindam.bean;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component(value="cs")//creating the object of Spring bean in container
public class Customer {
	@Value("C1")
private String cid;
	@Value("ASHOK")
private String cname;
	@Value("545445")
private String cphno;
}
