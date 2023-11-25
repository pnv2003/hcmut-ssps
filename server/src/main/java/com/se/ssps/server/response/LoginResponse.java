package com.se.ssps.server.response;

import com.se.ssps.server.entity.user.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginResponse {
    private User user;
    private boolean isCorrectPass;
}
