import { Component } from '@angular/core';
import {Employee} from './models/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-angular-simple';
  employeeArray: Employee[] = [
    {id: 1 , name: 'Fabian',country:'Argentina'},
    {id: 2 , name: 'Pedro',country:'Colombia'},
    {id: 3 , name: 'Jose',country:'Venezuela'}
  ];
  selectedEmployee: Employee = new Employee();
  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }
  openForEdit(empleado : Employee){
    this.selectedEmployee= empleado;
  }
  delete(){
    if(confirm('Esta seguro de borrar el registro?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}
