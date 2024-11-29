package com.baxees.weddingduniya.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baxees.weddingduniya.model.UserRegistrationApproval;

public interface UserRepository extends JpaRepository<UserRegistrationApproval, UUID> {

	public  boolean existsByuserEmail(String userEmail);
	
	UserRegistrationApproval findByuserEmailAndPassword(String userEmail, String password);
}
