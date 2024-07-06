package com.onlinestore.onlinestore.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductController {

	@RequestMapping("/products")
	public String getAllProducts() {
		return "Sorry I am not given any product at this time";
	}
}
