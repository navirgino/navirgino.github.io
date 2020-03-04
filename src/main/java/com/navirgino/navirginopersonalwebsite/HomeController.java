package com.navirgino.navirginopersonalwebsite;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String GetSplashPageView() {
        return "views/splash";
    }

}
