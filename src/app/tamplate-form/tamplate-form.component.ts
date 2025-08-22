import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tamplate-form',
  imports: [FormsModule,JsonPipe,CommonModule,RouterModule],
  standalone:true,
  templateUrl: './tamplate-form.component.html',
  styleUrl: './tamplate-form.component.css'
})
export class TamplateFormComponent {
    constructor(private router: Router) {}

  goReactive(){
    this.router.navigate(["/data-binding"])
  }
  studentObj:any ={
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'',
    zipCode:'',
    isActiveTerms:false
  }
 
  formValue: any = {};

  onSubmit(form: any) {
    if (form.valid) {
      this.formValue = { ...this.studentObj };
      alert('Form submitted successfully ✅');
      console.log('Form Data:', this.formValue);
    } else {
      alert('❌ Please fix the validation errors.');
    }
  }



}
