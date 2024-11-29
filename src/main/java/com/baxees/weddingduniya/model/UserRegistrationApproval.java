package com.baxees.weddingduniya.model;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.UUID;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "user_registration_approval")
public class UserRegistrationApproval {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Column(name = "user_id")
	private UUID userId;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "user_email")
	private String userEmail;

	@Column(name = "user_location")
	private String userLocation;

	@Column(name = "contact_number")
	private String contactNumber;

	@Column(name = "user_gender")
	private String gender;

	@Column(name = "user_registration_time")
	private String userRegistrationTime;

	@Column(name = "user_password")
	private String password;

	@Column(name = "user_role")
	private String role;

	@Column(name = "approval")
	private boolean approval = false;
	
	@OneToOne(mappedBy = "userRegistrationApproval", cascade = CascadeType.ALL)
	private User user;

	public UserRegistrationApproval() {

		this.userRegistrationTime = generateUserRegistrationTime();
		this.password = generateRandomPassword();
		this.role = "user";
	}

	private String generateUserRegistrationTime() {

		SimpleDateFormat dateFormat = new SimpleDateFormat("dd MMM HH:mm");
		return dateFormat.format(new Date());
	}

	private String generateRandomPassword() {
		int length = 8;
		String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
		StringBuilder password = new StringBuilder();
		Random random = new Random();

		for (int i = 0; i < length; i++) {
			password.append(characters.charAt(random.nextInt(characters.length())));
		}

		return password.toString();
	}

}
