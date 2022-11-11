package React_Java.React_Java.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import React_Java.React_Java.model.Employee;
import React_Java.React_Java.repository.Employeerepository;

//if there is error of cross origin in the console then we have to use this annotation
@CrossOrigin(origins = "*")
@RestController

@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private Employeerepository employeeRepository;

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {

		return employeeRepository.findAll();
	}

	// create employee rest api

	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {

		return employeeRepository.save(employee);

	}

}
