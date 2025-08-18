import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible: boolean = false;
  istoggle: boolean = false;
  num1:string = "";
  num2:string = "";
  isActive: boolean = false;
  seletedOption: string = "";
  employeeList:any[] =[
    { id: 1, name: "Fahad", age: 25, city: "Dhaka" },
    { id: 2, name: "Rifat", age: 30, city: "Chittagong" },
    { id: 3, name: "Evan", age: 28, city: "Rajshahi" },
    { id: 4, name: "Shahjalal", age: 35, city: "Khulna" }
  ]
  cityArray: string[] =["dhaka","chittagong","rajshahi","khulna","sylhet"];
  hideDiv(){
    this.isDiv1Visible = false;
  }
  showDiv(){
    this.isDiv1Visible = true;
  }
  toggleDiv(){
    this.istoggle = !this.istoggle

  }
}
