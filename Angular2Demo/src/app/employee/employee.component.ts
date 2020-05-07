import { Component } from "@angular/core"

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    firstName: string = "Jerald";
    lastName: string = "Siby";
    gender: string = "male";
    age: number = 20;
}