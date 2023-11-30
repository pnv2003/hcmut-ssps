package com.se.ssps.server.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.se.ssps.server.entity.user.User;
import com.se.ssps.server.repository.user.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User findUser(String username) {
        return userRepository.findByUsername(username);
    }
    
}
