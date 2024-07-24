package com.arindam.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Student {
	@Id
	@Column(length = 10)
private String rollno;
	@Column(length = 25)
private String sname;
	@Column(length = 25)
private String sdept;
}
