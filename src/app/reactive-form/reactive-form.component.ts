import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe],
  standalone: true,
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  // ✅ Reactive Form with multiple validators and field examples
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl("", [Validators.required]),
    userName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{10}$")]),
    gender: new FormControl("", [Validators.required]),
    dob: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    isTerm: new FormControl(false, [Validators.requiredTrue])
  });

  formValue: any;

  onSave() {
    if (this.studentForm.valid) {
      this.formValue = this.studentForm.value;
      alert("✅ Form submitted successfully!");
      console.log(this.formValue);
    } else {
      alert("❌ Please fix validation errors before submitting.");
    }
  }
}
