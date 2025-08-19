import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // only import what is used in template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corrected property name
})
export class AppComponent {
  title = 'practice';
}
