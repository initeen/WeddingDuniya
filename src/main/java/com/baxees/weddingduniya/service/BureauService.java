package com.baxees.weddingduniya.service;

import java.util.List;
import java.util.UUID;

import com.baxees.weddingduniya.model.BureauRegistrationApproval;

public interface BureauService {

	public BureauRegistrationApproval createBureau(BureauRegistrationApproval bureau);

	public boolean checkEmail(String marriageBureauEmail);

	public BureauRegistrationApproval bureaulogin(String marriageBureauEmail, String password);

	List<BureauRegistrationApproval> getAllBureauRegistrationApprovals();

	void approveRegistration(UUID bureau_id);

	void rejectRegistration(UUID bureau_id);
	
	String recoverPassword(String marriageBureauEmail);
	
}
