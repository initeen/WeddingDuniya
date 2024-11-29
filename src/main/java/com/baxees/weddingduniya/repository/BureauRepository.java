package com.baxees.weddingduniya.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.baxees.weddingduniya.model.BureauRegistrationApproval;

public interface BureauRepository extends JpaRepository<BureauRegistrationApproval, UUID> {

	public boolean existsBymarriageBureauEmail(String marriageBureauEmail);
	
	BureauRegistrationApproval findBymarriageBureauEmailAndPassword(String marriageBureauEmail, String password);
	
	BureauRegistrationApproval findBymarriageBureauEmail(String marriageBureauEmail);
}
