package com.arindam.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="product_master")
public class Product {
@Id
@Column(length = 10)
private String pid;
@Column(length = 25)
private String pname;
private Integer pqty;
private Double price;
}
