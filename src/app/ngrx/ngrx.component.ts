import { Component } from '@angular/core';
import { HeadingComponent } from "../reuseableComponent/heading/heading.component";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-ngrx',
  imports: [HeadingComponent, CounterComponent],
  templateUrl: './ngrx.component.html',
  styleUrl: './ngrx.component.css'
})
export class NgrxComponent {

}
