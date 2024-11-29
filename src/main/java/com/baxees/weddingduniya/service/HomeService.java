package com.baxees.weddingduniya.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class HomeService {

	@Autowired
	JavaMailSender javaMailSender;
	
	public void sendSimpleMail(String recipientEmail, String subject, String body) {
		
		SimpleMailMessage message = new SimpleMailMessage();
		
		
		 message.setTo(recipientEmail); 
	        message.setFrom("iamniteenlahare@gmail.com");
	        message.setSubject(subject); 
	        message.setText(body); 
	        
	        javaMailSender.send(message); 
	        
	        System.out.println("Mail sent successfully!");
		
	}
	
	
}
