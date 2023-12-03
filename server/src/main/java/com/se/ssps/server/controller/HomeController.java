package com.se.ssps.server.controller;

import javax.security.auth.login.LoginException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.se.ssps.server.entity.response.LoginResponse;
import com.se.ssps.server.entity.user.User;
import com.se.ssps.server.service.user.UserService;

@RestController
public class HomeController {

    @Autowired
    UserService userService;

    @GetMapping("/index")
    public String homePage(){
        return "This is homepage";
    }

    @GetMapping("/login")
    public String loginPage(){
        return "this is loginpage";
    }

    @PostMapping("/login")
    public LoginResponse login_proccess(@RequestBody User user) throws LoginException{
        LoginResponse loginResponse = new LoginResponse();
        User findUser = userService.findUser(user.getUsername());
        if (findUser != null) {
            if (findUser.getPassword().equals(user.getPassword()) ) {
                loginResponse.setUser(findUser);
                System.out.println(loginResponse.getUser().getUsername());
                loginResponse.setCorrectPass(true);
                return loginResponse;
            }
            loginResponse.setUser(findUser);
            loginResponse.setCorrectPass(false);
            return loginResponse;
        }
        return loginResponse;
    }
   
}
