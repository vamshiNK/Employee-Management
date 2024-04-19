import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { EmployeeServiceService } from '../employee-service.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(
    private employeeservice: EmployeeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getallemployee();
  }
  //get  service
  private getallemployee() {
    this.employeeservice.getEmployeeList().subscribe((data) => {
      this.employees = data;
    });
  }
  GetEmployeeDeatils(id: number) {
    console.log('Id : ', id);
    this.router.navigate(['empdetails', id]);
  }

  EditEmployeeDeatils(id: number) {
    console.log('Id : ', id);
    this.router.navigate(['updateemp', id]);
  }
  DeleteEmployeeDeatils(id: number) {
    console.log('Id : ', id);
    this.employeeservice.deleteEmpdataById(id).subscribe((data) => {
      this.router.navigate(['/employee']);
      this.getallemployee();
    });
  }
}
