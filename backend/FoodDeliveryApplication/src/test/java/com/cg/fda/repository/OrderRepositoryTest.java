
package com.cg.fda.repository;



import static org.assertj.core.api.Assertions.assertThat;
import java.util.List;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit.jupiter.SpringExtension;

 

import com.cg.fda.domain.Order;

 

@ExtendWith(SpringExtension.class)
@DataJpaTest
public class OrderRepositoryTest {

 

    @Autowired
    private OrderRepository orderRepository;

 

    @Autowired
    private TestEntityManager testEntityManager;

 

    @Test
    public void testNewOrder() throws Exception {
        Order order = new Order(3, "shivani", "9550355319", "shivani@gmail.com", "125/B");
        Order saveInDb = testEntityManager.persist(order);
        Order getFromInDb = orderRepository.findById(saveInDb.getOrderId()).get();
        assertThat(getFromInDb).isEqualTo(saveInDb);
    }

 

    @Test
    public void testDeleteOrderById() throws Exception {
        Order order1 = new Order(3, "shivani", "9550355319", "shivani@gmail.com", "125/B");
        Order order2 = new Order(1, "shivani", "9550355319", "shivani@gmail.com", "125/B");
        Order order = testEntityManager.persist(order1);
        testEntityManager.persist(order2);
        testEntityManager.remove(order);
        List<Order> investors = (List<Order>) orderRepository.findAll();
        Assert.assertEquals(1, investors.size());

 

    }

 

    @Test
    public void testUpdateOrderById() {

 

        Order order2 = new Order(1, "shivani", "9550355319", "shivani@gmail.com", "125/B");
        testEntityManager.persist(order2);
        Order getFromDb = orderRepository.findById(1).get();
        getFromDb.setorderId(2);
        testEntityManager.persist(getFromDb);
        assertThat(getFromDb.getOrderId()).isEqualTo(2);
    }

 

    @Test
    public void testGetAllOrder() throws Exception {
        Order order1 = new Order(3, "shivani", "9550355319", "shivani@gmail.com", "125/B");
        Order order2 = new Order(1, "shivani", "9550355319", "shivani@gmail.com", "125/B");
        testEntityManager.persist(order1);
        testEntityManager.persist(order2);
        List<Order> orderlist = (List<Order>) orderRepository.findAll();
        Assert.assertEquals(2, orderlist.size());
    }

 

}