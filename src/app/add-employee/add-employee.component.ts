import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {


  emp_code = ""
  name = ""
  designation = ""
  salary = ""
  companyName = ""
  mobileNO = ""
  username = ""
  password = ""

  readValue=()=>{

    let data:any = {"emp_code":this.emp_code,"name":this.name,"designation":this.designation,"salary":this.salary,"companyName":this.companyName,"mobileNO":this.mobileNO,"username":this.username,"password":this.password}
    console.log(data)
  }
}
