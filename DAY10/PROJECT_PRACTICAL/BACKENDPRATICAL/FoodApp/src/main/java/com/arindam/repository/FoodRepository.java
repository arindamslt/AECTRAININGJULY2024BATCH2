package com.arindam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arindam.entity.Food;
@Repository
public interface FoodRepository extends JpaRepository<Food,String>{

}
