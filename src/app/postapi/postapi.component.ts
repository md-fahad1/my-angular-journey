import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postapi',
  imports:[CommonModule,FormsModule],
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent implements OnInit {
  user: any = { firstName: '', lastName: '' };
  users: any[] = [];
  getUser:any [] =[];

  http = inject(HttpClient);
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.http.get('get/user').subscribe((res:any)=>{
      this.getUser = res;

    })
  }

  onSave() {
    if (!this.user.firstName || !this.user.lastName) {
      alert('Please enter both names');
      return;
    }

    this.http.post('api/post', this.user).subscribe((res:any) => {
      if (res.result) {
        alert('User created');
        this.users.push({ ...this.user });
        this.user = { firstName: '', lastName: '' }; 
      } else {
        alert(res.message);
      }
    });
  }
}
