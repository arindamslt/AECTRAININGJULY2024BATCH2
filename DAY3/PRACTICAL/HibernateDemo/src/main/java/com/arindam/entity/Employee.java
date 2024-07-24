package com.arindam.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data//getter setter toString()
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="employee_master")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private Integer eid;
	@Column(length = 25,nullable = false)
private String ename;
	@Column(name="desig",length = 25)
private String edesig;
private Double sal;
@Temporal(TemporalType.DATE)
private Date joindt;
@Temporal(TemporalType.TIMESTAMP)
private Date workhr;








}
