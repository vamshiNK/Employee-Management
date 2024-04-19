import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { formatNumber } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee';
@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  constructor(
    private employeeservice: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeservice.getempdataByid(this.id).subscribe((data) => {
      this.employee = data;
    });

    //this.onsubmit();
  }
  onsubmit() {
    this.employeeservice
      .EditEmployeedataById(this.id, this.employee)
      .subscribe((data) => {
        console.log(data);
        this.gotoEmpinfo();
      });
  }
  gotoEmpinfo() {
    this.router.navigate(['employee']);
  }
}
