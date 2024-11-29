package com.baxees.weddingduniya.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "bureau")
public class Bureau {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private String id; //for pk
	
	@OneToOne
	@JoinColumn(name = "bureau_id")
	private BureauRegistrationApproval bureauRegistrationApproval ; //fk CONSTRAINT `FKB1` FOREIGN KEY (`marriage_bureau_id`) REFERENCES `bureau_registration_approval` (`marriage_bureau_id`),
	
	@Column(name = "marriage_bureau_name")
	private String marriageBureauName;
	
	@Column(name = "notification_id")
	private String notificationId; //FKB7_idx CONSTRAINT `FKB7` FOREIGN KEY (`notification_id`) REFERENCES `notification_table` (`notification_id`)
	
	@Column(name = "message_id")
	private String messageId; //FKB6_idx CONSTRAINT `FKB6` FOREIGN KEY (`message_id`) REFERENCES `messages` (`message_id`),
	
	@Column(name = "pincode")
	private int pincode;
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "email_id")
	private String emailId;
	
	@Column(name = "gst_no")
	private String gstNo;
	
	@Column(name = "shopact_license_image")
	private String shopactLicenseImage;
	
	@Column(name = "event_id")
	private String eventId; //FKB2_idx CONSTRAINT `FKB2` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`),
	
	@Column(name = "user_id")
	private String userId; //FKB5_idx CONSTRAINT `FKB5` FOREIGN KEY (`user_id`) REFERENCES `user_registration_approval` (`user_id`),
	
	@Column(name = "bureau_website")
	private String bureauWebsite;
	
	@Column(name = "status_of_mb")
	private String statusOfMb;
	
	//many offers:
	@OneToMany(mappedBy = "bureau", cascade = CascadeType.ALL)
	private List<Offer> offerList = new ArrayList<>();
	
//	@Column(name = "offer_id")
//	private String offerId; //FKKB3_idx CONSTRAINT `FKB3` FOREIGN KEY (`offer_id`) REFERENCES `offer_table` (`offer_id`),
	
	@Column(name = "contact_person_full_name")
	private String contactPersonFullName;
	
	@Column(name = "contact_person_designation")
	private String contactPersonDesignation;
	
	@Column(name = "contact_person_number")
	private String contactPersonNumber;
	
	@Column(name = "contact_person_email_id")
	private String contactPersonEmailId;
	
	@Column(name = "marriage_bureau_address")
	private String marriageBureauAddress;
	
	@Column(name = "city")
	private String city;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "country")
	private String country;
	
	@Column(name = "profile_image")
	private String profileImage;
	
	@Column(name = "owner_aadhar_card")
	private String ownerAadharCard;
	
	@Column(name = "owner_pan_card_image")
	private String ownerPanCardImage;
	
	@Column(name = "about")
	private String about;
	
	@Column(name = "mb_pan_card")
	private String mbPanCard;
	
	@Column(name = "shop_image_board_image")
	private String shopImageBoardImage;
	
	@Column(name = "visiting_card")
	private String visitingCard;
	
	@Column(name = "owner_name")
	private String owner_name;
	
	@Column(name = "starting_date")
	private Date startingDate;
	
	@Column(name = "owner_phone_no")
	private String ownerPhoneNo;
	
	@Column(name = "owner_email_id")
	private String ownerEmailId;
	
	@Column(name = "shopact_license_no")
	private String shopactLicenseNo;
	
	@Column(name = "logo")
	private String logo;
	
	@Column(name = "employee_id")
	private String employeeId; //FKB4_idx CONSTRAINT `FKB4` FOREIGN KEY (`employee_id`) REFERENCES `employees_of_bureau` (`employees_of_bureau_id`),
	
	
}


