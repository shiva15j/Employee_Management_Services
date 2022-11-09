package React_Java.React_Java.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import React_Java.React_Java.model.Employee;

@Repository
public interface Employeerepository  extends JpaRepository<Employee, Long>{

}
