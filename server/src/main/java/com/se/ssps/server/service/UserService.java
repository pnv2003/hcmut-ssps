package com.se.ssps.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.se.ssps.server.entity.User;
import com.se.ssps.server.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    
    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }
}
