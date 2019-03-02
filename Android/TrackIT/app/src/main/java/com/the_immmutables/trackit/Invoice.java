package com.the_immmutables.trackit;

import java.util.Date;

public class Invoice {
	String id;
	Date dispatch, expectedArrival, arrival;
	int quantitiy;
	double rate, amount, total;

	public Invoice(String id) {
		this.id = id;
	}

	public String getID() {
		return id;
	}
}
