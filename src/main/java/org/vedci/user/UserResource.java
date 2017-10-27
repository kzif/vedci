package org.vedci.user;

import org.vedci.utils.GenericService;
import org.vedci.utils.ResourcePaths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = ResourcePaths.USER_PATH)
public class UserResource extends GenericService<UserEntity, Long> {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserEntity insert(UserEntity user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return super.insert(user);
    }

}
