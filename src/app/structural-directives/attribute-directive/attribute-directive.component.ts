import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from "../../reuseableComponent/heading/heading.component";
import { ReuseableButtonComponent } from '../../reuseableComponent/reuseable-button/reuseable-button.component';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, HeadingComponent,ReuseableButtonComponent],
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent {
  // Example 1: Dynamic button colors
  divBgColor = 'bg-primary text-white';

  // Example 2: Toggle div state
  isDivVisible = true;

  // Example 3: Color input
  inputColor: string = '';

  // Example 4: Hover effect
  isHovered = false;

  // Example 5: Multiple conditional styles
  hasBorder = true;
  isRounded = false;

  // Example 6: Tabs
  activeTab = 0;

  // Example 7: Student table
  studentList = [
    { id: 1, name: 'Fahad', city: 'Dhaka', isActive: true, mark: 85 },
    { id: 2, name: 'Sadia', city: 'Chittagong', isActive: false, mark: 70 },
    { id: 3, name: 'Rahim', city: 'Sylhet', isActive: true, mark: 92 },
    { id: 4, name: 'Karim', city: 'Khulna', isActive: false, mark: 60 }
  ];

  // Example 8: Button active/inactive
  isButtonActive = false;

  // Example 9: Dark/Light theme toggle
  isDarkTheme = false;

  // Example 10: Dynamic card highlight
  selectedCard = 0;

  // Example 11: Alerts with condition
  alertType: 'success' | 'warning' | 'danger' | '' = '';

  // Example 12: Rating system
  rating = 3;

  // Actions
  changeButtonColorRed() {
    this.divBgColor = 'bg-danger text-white';
  }
  changeButtonColorGreen() {
    this.divBgColor = 'bg-success text-white';
  }
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }
  setTab(tabIndex: number) {
    this.activeTab = tabIndex;
  }
  selectCard(index: number) {
    this.selectedCard = index;
  }
  setAlert(type: 'success' | 'warning' | 'danger') {
    this.alertType = type;
  }
  setRating(value: number) {
    this.rating = value;
  }
}
