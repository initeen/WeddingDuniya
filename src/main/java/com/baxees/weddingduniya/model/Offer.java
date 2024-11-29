package com.baxees.weddingduniya.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "offer")
public class Offer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "offer_id")
	private int offerId;
	
	@Column(name = "offer_title")
	private String offerTitle;
	 
	@Column(name = "start_date")
	private Date startDate;
	
	@Column(name = "end_date")
	private Date endDate;
	
	@Column(name = "offer_description")
	private String offerDescription;
	
	@ManyToOne
	@JoinColumn(name = "bureau_id")
	private Bureau bureau;
}








