package com.se.ssps.server.controller.homepage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.se.ssps.server.entity.user.User;
import com.se.ssps.server.service.user.UserService;

@RestController
@CrossOrigin
public class HomeController {

    @Autowired
    UserService userService;

    @GetMapping("")
    public String homePage(){
        return "This is homepage";
    }

    @GetMapping("/login")
    public String loginPage(){
        return "this is loginpage";
    }

    @PostMapping("/login")
    public String login_proccess(@RequestBody User user) {
        User findUser = userService.findUser(user.getUsername());
        if (findUser != null) {
            if (findUser.getPassword().equals(user.getPassword()) && findUser.getIsAdmin().equals(true)) return "welcome_Admin";
            if (findUser.getPassword().equals(user.getPassword()) && findUser.getIsAdmin().equals(false)) return "welcome_Student";
            return "wrong password";
        }
        return "Login_failed";
    }
}
