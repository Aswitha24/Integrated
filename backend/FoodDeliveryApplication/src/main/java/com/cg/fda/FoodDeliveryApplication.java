package com.cg.fda;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@SpringBootApplication

public class FoodDeliveryApplication {
	private static final Logger LOGGER = LogManager.getLogger(FoodDeliveryApplication.class);
	/**
	* This method contains main method to start spring boot application
	* @param args
	*/
	public static void main(String[] args) {
		SpringApplication.run(FoodDeliveryApplication.class, args);
		LOGGER.info("Application started at port 8081");
	}
}
