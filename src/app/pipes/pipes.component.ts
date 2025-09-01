import { Component } from '@angular/core';
import { HeadingComponent } from "../reuseableComponent/heading/heading.component";

@Component({
  selector: 'app-pipes',
  imports: [HeadingComponent],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

}
