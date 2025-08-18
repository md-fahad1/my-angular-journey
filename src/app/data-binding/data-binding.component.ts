import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name:string ="fahad";
  inputType ="checkbox";
  inputType1 ="text";
  myClassName:string = "bg-success";
  isBangalesh:boolean = true;
  dateNow: Date = new Date();
  divisionName:string = "Dhaka";
  constructor(){
   
  }
  showAlert( message: string){
    alert(message);
  }
  chageNmae(){
    this.name = "Rifat";
    this.myName.set("Evan");
  }
  myName = signal("Fahad");

}
