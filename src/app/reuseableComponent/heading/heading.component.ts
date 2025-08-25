import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
  imports: [CommonModule] // only if standalone
})
export class HeadingComponent {
  @Input() message: string = '';
  @Input() note: string = '';
  @Input() alertClass: string = 'alert-success';
}
