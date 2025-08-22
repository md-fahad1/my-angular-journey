import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [],
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})
export class GetapiComponent {
  postList: any[] = [];

  constructor(private http: HttpClient) {}

  getAllPost() {
    
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
  
        this.postList = res;
      });
  }
}
