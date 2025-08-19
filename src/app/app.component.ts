import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './structural-directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './structural-directives/attribute-directive/attribute-directive.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet,DataBindingComponent,StructuralDirectiveComponent],
  imports: [RouterOutlet, AttributeDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
}
