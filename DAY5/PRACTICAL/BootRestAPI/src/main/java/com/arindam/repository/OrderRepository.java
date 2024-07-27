package com.arindam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arindam.entity.Order;
@Repository//@Component+Database Operation
public interface OrderRepository extends JpaRepository<Order, String> {

}
