package com.arindam.bean;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component(value="bk")
public class Book {
	@Value("B1")
private String bid;
	@Value("CORE JAVA")
private String bname;
	@Value("1000.00")
private Double price;
}
