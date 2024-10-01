package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Properties;
import com.example.demo.repository.PropertiesRepo;

@Service
public class propertiesService {
	 @Autowired
	    private PropertiesRepo propertiesRepository;

	    public Properties addproperty(Properties property) {
	        return propertiesRepository.save(property);
	    }
}
