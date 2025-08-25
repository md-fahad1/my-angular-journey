import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

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
  constructor(private userSrv:UserService){}
  ngOnInit(): void {
    this.getAllUsers();
  }
  // getAllUsers(){
  //   this.http.get('get/user').subscribe((res:any)=>{
  //     this.getUser = res;

  //   })
  // }
  getAllUsers(){
    this.userSrv.getAllUser().subscribe((res:any)=>{
      this.getUser =res.data

    })
  }
  // onSave() {
  //   if (!this.user.firstName || !this.user.lastName) {
  //     alert('Please enter both names');
  //     return;
  //   }

  //   this.http.post('api/post', this.user).subscribe((res:any) => {
  //     if (res.result) {
  //       alert('User created');
  //       this.users.push({ ...this.user });
  //       this.user = { firstName: '', lastName: '' }; 
  //     } else {
  //       alert(res.message);
  //     }
  //   });
  // }
  onSave(){
    this.userSrv.createUser(this.user).subscribe((res:any)=>{
      if(res.result){
  alert("user create successfully ")
      }else{
        alert(res.message)
      }
      
      

    })
  }
}
