import { Component, inject } from '@angular/core';
import { HeadingComponent } from "../reuseableComponent/heading/heading.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
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
    if (this.loginObj.username === "Admin" && this.loginObj.password === "123") {
      alert("✅ Login Successful!");
      this.router.navigateByUrl('getapi');
    } else {
      alert("❌ Login Failed. Try again.");
      this.router.navigateByUrl('login');
    }
  }
}
