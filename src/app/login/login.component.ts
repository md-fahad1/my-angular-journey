import { Component, inject } from '@angular/core';
import { HeadingComponent } from "../reuseableComponent/heading/heading.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeadingComponent, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: ''
  };

  router = inject(Router);

  onSave() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    const validUser = users.find(
      (u: any) => u.username === this.loginObj.username && u.password === this.loginObj.password
    );

    if (validUser) {
      alert("✅ Login Successful!");

      // save login state
      localStorage.setItem('loggedInUser', JSON.stringify(validUser));

      this.router.navigateByUrl('getapi');
    } else {
      alert("❌ Invalid credentials. Try again.");
    }
  }
}
