package com.baxees.weddingduniya.model;

import java.util.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id")
	private int id;

	@OneToOne
	@JoinColumn(name = "user_id")
	private UserRegistrationApproval userRegistrationApproval; // CONSTRAINT `FKU1` FOREIGN KEY (`user_id`) REFERENCES
																// `user_registration_approval` (`user_id`),

	@Column(name = "event_id")
	private String eventId; // CONSTRAINT `FKU2` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`),
	
	@Column(name = "full_name")
	private String fullName;
	
	@Column(name = "notification_id")
	private String notificationId; // CONSTRAINT `FKU3` FOREIGN KEY (`notification_id`) REFERENCES
									// `notification_table` (`notification_id`),
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "phone_number")
	private String phoneNumber;

	@Column(name = "caste")
	private String caste;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "education")
	private String education;
	
	@Column(name = "height")
	private Double height;
	
	@Column(name = "weight")
	private Double weight;
	
	@Column(name = "marital_status")
	private String maritalStatus;
	
	@Column(name = "occupation")
	private String occupation;
	
	@Column(name = "birth_date")
	private Date birthDate;
	
	@Column(name = "hobbies")
	private String hobbies;
	
	@Column(name = "favorite_book")
	private String favoriteBook;
	
	@Column(name = "favorite_food")
	private String favoriteFood;
	
	@Column(name = "favorite_song")
	private String favoriteSong;
	
	@Column(name = "favorite_movie")
	private String favoriteMovie;
	
	@Column(name = "favorite_singer")
	private String favoriteSinger;
	
	@Column(name = "favorite_place")
	private String favoritePlace;
	
	@Column(name = "physical_status")
	private String physicalStatus;
	
	@Column(name = "complexion")
	private String complexion;
	
	@Column(name = "body_type")
	private String bodyType;
	
	@Column(name = "income")
	private Double income;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "religion")
	private String religion;
	
	@Column(name = "mother_name")
	private String motherName;
	
	@Column(name = "family_type")
	private String familyType;
	
	@Column(name = "family_value")
	private String familyValue;
	
	@Column(name = "language")
	private String language;
	
	@Column(name = "no_of_siblings")
	private int no_OfSiblings;
	
	@Column(name = "eating_habits")
	private String eatingHabits;
	
	@Column(name = "profile_image")
	private String profileImage;
	
	@Column(name = "blood_group")
	private String bloodGroup;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "user_age")
	private int userAge;
	
	@Column(name = "mother_tongue")
	private String motherTongue;
	
	@Column(name = "user_images")
	private String userImages;
	
	@Column(name = "user_status")
	private String userStatus;
	
	@Column(name = "drinking_habit")
	private String drinkingHabit;
	
	@Column(name = "smoking_habit")
	private String smokingHabit;
	
	@Column(name = "father_name")
	private String fatherName;
	
	@Column(name = "about")
	private String about;

}


