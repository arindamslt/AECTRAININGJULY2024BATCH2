package com.arindam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.arindam.entity.Product;
@Repository//@Component+Database Operation
public interface ProductRepository extends JpaRepository<Product,String> {
@Query("from Product where pname=:pname")
public List<Product> getPname(String pname);
}
