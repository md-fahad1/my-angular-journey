import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})
export class GetapiComponent {
  postList: any[] = [];
  photoList:any[] =[];

  constructor(private http: HttpClient) {}

  getAllPost() {
    
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
  
        this.postList = res.slice(0,10);
      });
  }
  getAllPostPhoto(){
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((response:any)=>{
      this.photoList = response.slice(0,10)
    
    })
  }
}
