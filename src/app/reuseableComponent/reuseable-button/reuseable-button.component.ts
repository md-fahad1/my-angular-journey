import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reuseable-button',
  standalone: true,
  imports: [CommonModule],  // ✅ This makes ngClass available
  templateUrl: './reuseable-button.component.html',
  styleUrls: ['./reuseable-button.component.css']
})
export class ReuseableButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
  @Output() onBtnClick = new EventEmitter<void>();

  onClick() {
    this.onBtnClick.emit();
  }
}
