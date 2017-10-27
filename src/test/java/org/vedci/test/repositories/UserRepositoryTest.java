package org.vedci.test.repositories;

import org.apache.log4j.Logger;
import org.vedci.test.utils.AbstractTest;
import org.vedci.user.UserEntity;
import org.vedci.user.UserRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserRepositoryTest extends AbstractTest {

    private static final Logger LOGGER = Logger.getLogger(UserRepositoryTest.class);

    @Autowired
    private UserRepository userRepository;

    @Test
    public void findAllTest() {
        List<UserEntity> users = this.userRepository.findAll();

        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Test FindAll(): " + users);
        }
    }

}
