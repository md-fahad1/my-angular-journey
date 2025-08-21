import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tamplate-form',
  imports: [FormsModule,JsonPipe,CommonModule],
  standalone:true,
  templateUrl: './tamplate-form.component.html',
  styleUrl: './tamplate-form.component.css'
})
export class TamplateFormComponent {
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
