import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent implements OnInit {
  id: number; //id number
  employee: Employee; //object employee
  constructor(
    private route: ActivatedRoute,
    private employeeservice: EmployeeServiceService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; //get the id from url
    this.getemployee();
  onsubmit
  {}
    
  }
  getemployee() {
    this.employeeservice.getempdataByid(this.id).subscribe((data) => {
      this.employee = data;
      console.log(data);
    });
    
  }
}
