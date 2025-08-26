import { Component, inject } from '@angular/core';
import { HeadingComponent } from "../reuseableComponent/heading/heading.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HeadingComponent, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpObj: any = {
    email: '',
    username: '',
    password: ''
  };

  router = inject(Router);

  onSave() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const isExist = users.find((u: any) => u.email === this.signUpObj.email);
    if (isExist) {
      alert("⚠️ User already exists. Please login.");
      this.router.navigateByUrl('login');
      return;
    }

    // add new user
    users.push(this.signUpObj);
    localStorage.setItem('users', JSON.stringify(users));

    alert("✅ Sign Up Successful!");
    this.router.navigateByUrl('login');
  }
}
