package com.cg.fda.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import static org.junit.Assert.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.cg.fda.domain.RestaurantDetails;

@ExtendWith(SpringExtension.class)
@DataJpaTest
public class RestaurantDetailsRepositoryTest {

	@Autowired
	private RestaurantDetailsRepository restaurantdetailsRepository;

	@Autowired
	private TestEntityManager testEntityManager;

	@Test
	public void testNewRestaurantDetails() throws Exception {
		RestaurantDetails restaurantdetails = new RestaurantDetails(106, "Janani", "janani", "8512518301", "Mysore", "pizza", "100", "01", "Amrutha", "8521479637");
		RestaurantDetails saveInDb = testEntityManager.persist(restaurantdetails);
		RestaurantDetails getFromInDb = restaurantdetailsRepository.findById(saveInDb.getRestaurantDetailsId()).get();
		assertThat(getFromInDb).isEqualTo(saveInDb);
	}


	@Test
	public void testUpdateRestaurantDetailsById() {

		RestaurantDetails restaurantdetails = new RestaurantDetails(106, "Janani", "janani", "8512518301", "Mysore", "pizza", "100", "01", "Amrutha", "8521479637");
		testEntityManager.persist(restaurantdetails);
		RestaurantDetails getFromDb = restaurantdetailsRepository.findById(106).get();
		getFromDb.setRestaurantDetailsId(107);
		testEntityManager.persist(getFromDb);

		assertThat(getFromDb.getRestaurantDetailsId()).isEqualTo(107);
	}

	@Test
	public void testGetAllRestaurantDetails() throws Exception {
		RestaurantDetails restaurantdetails1 = new RestaurantDetails(106, "Janani", "janani", "8512518301", "Mysore", "pizza", "100", "01", "Amrutha", "8521479637");
		RestaurantDetails restaurantdetails2 = new RestaurantDetails(102, "Janani", "janani", "8512518301", "Mysore", "pizza", "100", "01", "Amrutha", "8521479637");
		RestaurantDetails restaurantdetails3 = new RestaurantDetails(107, "Janani", "janani", "8512518301", "Mysore", "pizza", "100", "01", "Amrutha", "8521479637");
		testEntityManager.persist(restaurantdetails1);
		testEntityManager.persist(restaurantdetails2);
		testEntityManager.persist(restaurantdetails3);
		List<RestaurantDetails> restaurantdetailslist = (List<RestaurantDetails>) restaurantdetailsRepository.findAll();
		assertEquals(3, restaurantdetailslist.size());
		
	}
}

