import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directives/structural-directive/structural-directive.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet,DataBindingComponent],
  imports: [RouterOutlet, StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
}
