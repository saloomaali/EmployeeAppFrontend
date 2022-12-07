import { Component } from '@angular/core';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {


  data:any = [{"emp_code":51324,"name":"salooma","designation":"SWT","salary":24000,"companyName":"Nest","mobileNO":2851,"username":"saloo","password":"sal-88"}]
}
