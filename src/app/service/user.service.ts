import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

    getAllUser(){
      return this.http.get("/getUser");
    }
    createUser(user:any){
      return this.http.post("/craeteUser",user);
    }
  
}
