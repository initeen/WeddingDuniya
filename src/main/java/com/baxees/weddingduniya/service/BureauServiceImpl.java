package com.baxees.weddingduniya.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import com.baxees.weddingduniya.model.BureauRegistrationApproval;
import com.baxees.weddingduniya.repository.BureauRepository;


@Service
public class BureauServiceImpl implements BureauService {

	@Autowired
	private BureauRepository bureauRepo;
	
	@Autowired
	HomeService homeService;
	
	@Override
	public BureauRegistrationApproval createBureau(BureauRegistrationApproval bureau) {
		
		//return bureauRepo.save(bureau);
		return bureauRepo.saveAndFlush(bureau);
	
	}
	@Override
	public boolean checkEmail(String marriageBureauEmail) {
		
		return bureauRepo.existsBymarriageBureauEmail(marriageBureauEmail);
	}
	@Override
	public BureauRegistrationApproval bureaulogin(String marriageBureauEmail, String password) {
		
		return bureauRepo.findBymarriageBureauEmailAndPassword(marriageBureauEmail, password);
	}
	@Override
	public List<BureauRegistrationApproval> getAllBureauRegistrationApprovals() {
		
		  return bureauRepo.findAll();
	}
	@Override
	public void approveRegistration(UUID bureau_id) {
		
		BureauRegistrationApproval bureauRegistrationApproval = bureauRepo.findById(bureau_id).orElseThrow(() -> new IllegalArgumentException("Invalid bureau ID"));
		System.out.println(bureauRegistrationApproval.getMarriageBureauEmail());
		bureauRegistrationApproval.setApproval(true);
		bureauRepo.save(bureauRegistrationApproval);
		
		 // Send approval email to the bureau
	    String recipientEmail = bureauRegistrationApproval.getMarriageBureauEmail();
	    String subject = "Registration Approval Notification";
	    String body = "Dear Bureau,\n\nYour registration has been approved. Here are your login credentials:\n\n" +
	            "Email: " + recipientEmail + "\n" +
	    		"Bureau Name: "+ bureauRegistrationApproval.getMarriageBureauName() + "\n" +
	            "Password: " + bureauRegistrationApproval.getPassword();

	    if (StringUtils.hasText(recipientEmail) && StringUtils.hasText(body)) {
	        homeService.sendSimpleMail(recipientEmail, subject, body);
	        System.out.println("Approval email sent successfully.");
	    } else {
	        System.out.println("Failed to send approval email. Recipient email or body is empty.");
	    }
	   
	}
	@Override
	public void rejectRegistration(UUID bureau_id) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public String recoverPassword(String marriageBureauEmail) {
		
		BureauRegistrationApproval bureauRegistrationApproval = bureauRepo.findBymarriageBureauEmail(marriageBureauEmail);
		if(bureauRegistrationApproval != null) {
			String password = bureauRegistrationApproval.getPassword();
			if(StringUtils.hasText(password)) {
				
				sendPasswordByEmail(marriageBureauEmail, password);
				
				return "Password sent to your mail";
			}else {
				return "Password is not sent";
			}
		}else {
			return "Email not found";
		}
		
	}
	 // Method to send password by email
    public void sendPasswordByEmail(String recipientEmail, String password) {
        String subject = "Password Recovery";
        //String body = "Your password is: " + password;
        
        String body = "Dear Bureau,\n\n Here are your login credentials:\n\n" +
	            "Email: " + recipientEmail + "\n" +
	            "Password: " + password;
        
        homeService.sendSimpleMail(recipientEmail, subject, body);
    }


}
