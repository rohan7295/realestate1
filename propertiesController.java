package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Properties;
import com.example.demo.repository.PropertiesRepo;

@CrossOrigin (origins = "http://localhost:4200")
@RestController
@RequestMapping("api/properties")
public class propertiesController {

	@Autowired
	private PropertiesRepo propertyRepo;
	
	 @PostMapping("/save")
	    public ResponseEntity<Properties> saveProperties(@RequestBody Properties property) {
		 propertyRepo.save(property);
	        return ResponseEntity.ok(property);
	    }
	 @DeleteMapping("/delete/{id}")
	    public ResponseEntity<Void> deleteProperty(@PathVariable Long id) {
	        propertyRepo.deleteById(id);
	        return ResponseEntity.noContent().build();
	    }

}
