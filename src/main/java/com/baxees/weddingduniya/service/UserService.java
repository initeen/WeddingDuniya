package com.baxees.weddingduniya.service;

import com.baxees.weddingduniya.model.UserRegistrationApproval;


public interface UserService {

	public UserRegistrationApproval createUser(UserRegistrationApproval user);
	
	public boolean checkEmail(String userEmail);
	
	public UserRegistrationApproval userlogin(String userEmail, String password);
}
