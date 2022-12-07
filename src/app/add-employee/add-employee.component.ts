import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

constructor(private api:ApiService){}

  readValue=()=>{

    let data:any = {"emp_code":this.emp_code,"name":this.name,"designation":this.designation,"salary":this.salary,"companyName":this.companyName,"mobileNO":this.mobileNO,"username":this.username,"password":this.password}
    console.log(data)

    this.api.addEmployee(data).subscribe(

      (response:any)=>{

        console.log(response)

        if(response.status == "success"){
          alert("Employee added successfully")

          this.emp_code = ""
          this.name = ""
          this.designation = ""
          this.salary = ""
          this.companyName = ""
          this.mobileNO = ""
          this.username = ""
          this.password = ""

        }
        else{
          alert("Something went wrong")
        }
      }
    )
  }
}
