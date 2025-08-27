import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeadingComponent } from "../reuseableComponent/heading/heading.component";

@Component({
  selector: 'app-signal',
  imports: [HeadingComponent],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  // ✅ Define Signals
  firstName = signal("Angular");
  rollNo = signal<number>(123);

  constructor() {
    // Example of auto update after 5 seconds
    setTimeout(() => {
      this.firstName.set("Tailwind");
    }, 5000);
  }

  changeName() {
    this.firstName.set("React JS");
  }

  changeRoll() {
    this.rollNo.update(v => v + 1); // increment roll number
  }
}
