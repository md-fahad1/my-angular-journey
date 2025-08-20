import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {
  // ------------------------------
  // *ngIf examples
  // ------------------------------
  isDiv1Visible: boolean = false;
  istoggle: boolean = false;
  num1: string = "";
  num2: string = "";
  seletedOption: string = "";

  isLoggedIn: boolean = false;
  errorMessage: string = "";

  // ------------------------------
  // *ngFor examples
  // ------------------------------
  cityArray: string[] = ["dhaka", "chittagong", "rajshahi", "khulna", "sylhet"];
  employeeList: any[] = [
    { id: 1, name: "Fahad", age: 25, city: "Dhaka" },
    { id: 2, name: "Rifat", age: 30, city: "Chittagong" },
    { id: 3, name: "Evan", age: 28, city: "Rajshahi" },
    { id: 4, name: "Shahjalal", age: 35, city: "Khulna" }
  ];
  taskList: string[] = ["Buy groceries", "Call Mom", "Finish Angular project", "Go for a run"];

  // ------------------------------
  // *ngSwitch examples
  // ------------------------------
  userRole: string = "guest"; // can be guest | user | admin

  // ------------------------------
  // Methods
  // ------------------------------
  hideDiv() {
    this.isDiv1Visible = false;
  }
  showDiv() {
    this.isDiv1Visible = true;
  }
  toggleDiv() {
    this.istoggle = !this.istoggle;
  }
  login() {
    this.isLoggedIn = true;
    this.errorMessage = "";
  }
  logout() {
    this.isLoggedIn = false;
  }
  throwError() {
    this.errorMessage = "Something went wrong! Please try again.";
  }
}
