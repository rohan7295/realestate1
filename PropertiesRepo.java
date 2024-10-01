package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Properties;

@Repository
public interface PropertiesRepo extends JpaRepository <Properties, Long>{
	
	

}
