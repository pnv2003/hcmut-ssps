package com.se.ssps.server.service.user;

import org.springframework.stereotype.Service;

import com.se.ssps.server.entity.user.User;

@Service
public interface UserService {
    User findUser(String username);
}
