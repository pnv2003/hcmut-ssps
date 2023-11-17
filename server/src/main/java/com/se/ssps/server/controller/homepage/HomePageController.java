package com.se.ssps.server.controller.homepage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.se.ssps.server.entity.User;
import com.se.ssps.server.service.UserService;
@Controller
public class HomePageController {


    private final String homePage = "homePageGuest";
    private final String loginPage = "loginPage";
    private final String homePageStudent = "homePageStudent";
    private final String homePageAdmin = "homePageAdmin";
    private final String aboutUsPage = "aboutUsPage";
    private final String servicePage = "servicePage";
    private final String contactPage = "contactPage";
    private final String blogPage = "blogPage";

    @Autowired 
    UserService userService;

    @GetMapping("/")
    public String homePage(){
        return homePage;
    }

    @GetMapping("/login")
    public String loginPage(){
        return loginPage;
    }

    @PostMapping("/login")
    public String loginProccess(@RequestParam String username, @RequestParam String password, Model model){
        User findUser = userService.findByUsername(username);
        if (findUser != null) {
            if (findUser.getPassword().equals(password) && findUser.getIsAdmin().equals(true)) return homePageAdmin;
            if (findUser.getPassword().equals(password) && findUser.getIsAdmin().equals(false)) return homePageStudent;
            else {
                model.addAttribute("wrong_pwd", "Wrong password!");
            }
        }
        else {
            model.addAttribute("user_not_found", "User not found!");
        }
        return loginPage;
    }

    @GetMapping("/about-us")
    public String aboutUsPage(){
        return aboutUsPage;
    }

    @GetMapping("/service")
    public String servicePage(){
        return servicePage;
    }

    @GetMapping("/contact")
    public String contactPage(){
        return contactPage;
    }

    @GetMapping("/blog")
    public String blogPage(){
        return blogPage;
    }
}
