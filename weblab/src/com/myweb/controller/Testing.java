package com.myweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class Testing {

	@RequestMapping("index")
	public String index() {

		return "index";
	}

	@RequestMapping("base")
	public String base() {

		return "/client/baseContainer";
	}

	@RequestMapping("lm")
	public String learn() {
		return "learn";
	}
	
	@RequestMapping("login")
	public String login(){
		return "login";
	}
	
	@RequestMapping("hello")
	public String hello(){
		return "hello";
	}

}
