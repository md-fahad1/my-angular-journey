import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeadingComponent } from "../reuseableComponent/heading/heading.component";

@Component({
  selector: 'app-signal',
  imports: [HeadingComponent],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal("Angular")
  rollNo = signal<number>(123)
  constructor(){
    
    const fName = this.firstName();
    setTimeout(()=>{
      this.firstName.set("Tailwind")

    },5000);
  }
  changeName(){
    this.firstName.set("react js")

  }
}
