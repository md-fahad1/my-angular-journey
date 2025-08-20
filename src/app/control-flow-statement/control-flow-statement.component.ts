import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-statement',
  standalone: true,
  templateUrl: './control-flow-statement.component.html',
  styleUrls: ['./control-flow-statement.component.css']
})
export class ControlFlowStatementComponent {

  // Example 1-2: Basic Show/Hide + Toggle
  div1Visible: boolean = true;
  div2Visible: boolean = true;

  // Example 3: Student List
  studentList: any[] = [
    { id: 1, name: "John", age: 20, city: "New York" },
    { id: 2, name: "Jane", age: 22, city: "Los Angeles" },
    { id: 3, name: "Mike", age: 21, city: "Chicago" },
    { id: 4, name: "Sara", age: 23, city: "Houston" }
  ];
  show: 'name' | 'age' = 'name';

  // Example 4: Switch case for order status
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' = 'pending';

  // Example 5: Login state
  isLoggedIn = false;
  user = { name: 'Fahad', role: 'Admin' };

  // Example 6: Shopping cart
  cartItems: { name: string; price: number; qty: number }[] = [
    { name: 'Laptop', price: 1000, qty: 1 },
    { name: 'Phone', price: 600, qty: 2 },
  ];

  // Example 7: Notifications
  notifications: string[] = ['New Message', 'Order Update', 'Server Alert'];

  // Example 8: Nested if/else for weather
  weather = { temp: 32, condition: 'Sunny' };

  // Example 9: Empty list handling
  tasks: string[] = [];

  // Example 10: Role-based access
  role: 'Admin' | 'User' | 'Guest' = 'User';

  // ---------- Functions ----------
  showName() { this.show = "name"; }
  showAge() { this.show = "age"; }
  HideDiv() { this.div1Visible = false; }
  ShowDiv() { this.div1Visible = true; }
  ToggleDiv() { this.div2Visible = !this.div2Visible; }
  checkout() { alert("Proceeding to checkout..."); }
}
