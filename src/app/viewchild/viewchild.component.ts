import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HeadingComponent } from '../reuseableComponent/heading/heading.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './viewchild.component.html'
})
export class ViewchildComponent implements AfterViewInit {

  // Access input field using ViewChild
  @ViewChild('txt') textBox?: ElementRef;
  inputValue: string = '';
  ngAfterViewInit(): void {
    // Get initial value from input after view is initialized
    this.inputValue = this.textBox?.nativeElement.value;
  }
  updateValue() {
    if (this.textBox) {
      // Get latest input value on button click
      this.inputValue = this.textBox.nativeElement.value;
    }
  }
}
