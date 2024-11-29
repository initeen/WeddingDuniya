package com.baxees.weddingduniya.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.baxees.weddingduniya.model.UserRegistrationApproval;
import com.baxees.weddingduniya.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	@Override
	public UserRegistrationApproval createUser(UserRegistrationApproval user) {
		
		return userRepo.save(user);
	}
	@Override
	public boolean checkEmail(String userEmail) {
		
		return userRepo.existsByuserEmail(userEmail);
	}
	@Override
	public UserRegistrationApproval userlogin(String userEmail, String password) {
		
		return userRepo.findByuserEmailAndPassword(userEmail, password);
    }


	

}
