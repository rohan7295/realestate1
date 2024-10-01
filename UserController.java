package com.example.demo.controller;


import com.example.demo.model.RequestUser;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
@CrossOrigin (origins = "http://localhost:4200")
public class UserController {

	    @Autowired
	    private UserService userService;
	    
	    @Autowired
	    private UserRepository userRepo;

	    
	    
	    @PostMapping("/sign-up")
	    public ResponseEntity<?> signUp(@RequestBody User user) {
	        if (user.getEmail()!= null) {
	        	User userEmail  = 	userRepo.findByEmail(user.getEmail());
	        	if(userEmail != null) {
	        		  return ResponseEntity.badRequest().body("User already exists");	
	        	}
	          
	        }
	        return ResponseEntity.ok(userRepo.save(user));
	    }

	    @PostMapping("/sign-in")
	    public ResponseEntity<?> signIn(@RequestBody RequestUser user) {
	        User existingUser = userRepo.findByEmail(user.getEmail());
	        if (existingUser == null || !existingUser.getPassword().equals(user.getPassword())) {
	            return ResponseEntity.badRequest().body("Invalid credentials");
	        }
	        return ResponseEntity.ok("Login successful");
	    }

	   
	}