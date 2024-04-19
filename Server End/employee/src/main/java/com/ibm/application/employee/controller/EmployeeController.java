package com.ibm.application.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.application.employee.CustomeException.EmployeeResureceException;
import com.ibm.application.employee.model.Employee;
import com.ibm.application.employee.repository.EmployeeRepository;

@RestController
@RequestMapping("/ibm/empolyee")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@Autowired
	private EmployeeRepository  emRep;
	//add a record in table
	@PostMapping("/add")
	public Employee createEmployee(@RequestBody Employee emp)
	{
		return  emRep.save(emp);
	}
	//get data form table
	@GetMapping("/")
	public List<Employee>getAllEmployee()
	{
		return emRep.findAll();
	}
	//get data from table using Id
	@GetMapping("/{id}")
	public ResponseEntity <Employee> getEmployeeById(@PathVariable Long id) throws EmployeeResureceException
	{
		Employee emp= emRep.findById(id).orElseThrow(()->new 
				EmployeeResureceException("Employee not  found"));
	return  ResponseEntity.ok(emp);
	}
	// Update data in table
	@PutMapping("/update/{id}")
	public ResponseEntity <Employee> getEmployeeByIdupdate(@PathVariable Long id,@RequestBody Employee emp1) throws EmployeeResureceException
	{
		Employee emp= emRep.findById(id).orElseThrow(()->new 
				EmployeeResureceException("Employee not  found"));
	emp.setFname(emp1.getFname());
	emp.setLname(emp1.getLname());
	emp.setEmail(emp1.getEmail());
	Employee e= emRep.save(emp);
		return  ResponseEntity.ok(emp);
	
	}
	//delete data from table
	@DeleteMapping("/delete/{id}")
	public ResponseEntity <Employee> getEmployeeByIddelete(@PathVariable Long id) throws EmployeeResureceException
	{
		Employee emp= emRep.findById(id).orElseThrow(()->new 
				EmployeeResureceException("Employee not  found"));
		emRep.delete(emp);
	return  ResponseEntity.ok(emp);
}
}



