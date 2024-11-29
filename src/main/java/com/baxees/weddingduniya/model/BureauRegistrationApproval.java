package com.baxees.weddingduniya.model;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.UUID;
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
@Table(name = "bureau_registration_approval")
public class BureauRegistrationApproval {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Column(name = "bureau_id")
	private UUID bureau_id;

	@Column(name = "owner_name")
	private String ownerName;

	@Column(name = "marriage_bureau_name")
	private String marriageBureauName;

	@Column(name = "marriage_bureau_email")
	private String marriageBureauEmail;

	@Column(name = "mb_contact_number")
	private String mbContactNumber;

	@Column(name = "country")
	private String mbCountry;

	@Column(name = "state")
	private String mbState;

	@Column(name = "city")
	private String mbCity;

	@Column(name = "pincode")
	private int pincode;

	@Column(name = "bureau_registration_time")
	private String bureauRegistrationTime;

	@Column(name = "bureau_password")
	private String password;

	@Column(name = "bureau_role")
	private String role;

	@Column(name = "approval")
	private boolean approval = false;

	@OneToOne(mappedBy = "bureauRegistrationApproval")
	private Bureau bureau;
	
	public BureauRegistrationApproval() {

		this.bureauRegistrationTime = generateBureauRegistrationTime();
		this.password = generateRandomPassword();
		this.role = "bureau";
	}


	private String generateBureauRegistrationTime() {

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
