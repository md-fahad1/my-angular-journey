import { Component } from '@angular/core';
import { HeadingComponent } from "../reuseableComponent/heading/heading.component";

// ================================
// ✅ CLASS DEFINITIONS
// ================================

// 1. Basic Class
class Student {
  constructor(public name: string, public age: number, public rollNo?: number) {}
}

// 2. Class with Method
class Car {
  constructor(public brand: string, public model: string) {}
  getDetails() {
    return `${this.brand} - ${this.model}`;
  }
}

// 3. Base Class (for Inheritance)
class Employee {
  constructor(public name: string, public role: string) {}
  getRole() {
    return `${this.name} is a ${this.role}`;
  }
}

// 4. Inheritance with override
class Manager extends Employee {
  constructor(name: string, role: string, public teamSize: number) {
    super(name, role);
  }
  override getRole() {
    return `${super.getRole()} (Manages ${this.teamSize} people)`;
  }
}

// 5. Encapsulation
class BankAccount {
  private balance: number = 1000;
  deposit(amount: number) { this.balance += amount; }
  withdraw(amount: number) { this.balance -= amount; }
  getBalance() { return `Balance: $${this.balance}`; }
}

// ================================
// ✅ INTERFACE DEFINITIONS
// ================================
interface IEmployee {
  name: string;
  position: string;
}

interface Product {
  name: string;
  price: number;
  description?: string; // optional property
}

interface Order {
  readonly id: number; // cannot be changed once set
  item: string;
}

interface User {
  username: string;
  email: string;
}

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

@Component({
  selector: 'app-class-interface',
  imports: [HeadingComponent],
  templateUrl: './class-interface.component.html',
  styleUrls: ['./class-interface.component.css']
})
export class ClassInterfaceComponent {

  // ================================
  // ✅ USING CLASSES
  // ================================
  student1 = new Student("Alice", 20);
  student2 = new Student("Bob", 22, 101);

  car = new Car("Tesla", "Model X");

  manager = new Manager("Charlie", "Manager", 5);

  bankAccount = new BankAccount();

  // ================================
  // ✅ USING INTERFACES
  // ================================
  employee: IEmployee = { name: "David", position: "Developer" };

  product: Product = { name: "Laptop", price: 1200 };

  order: Order = { id: 101, item: "Phone" };

  users: User[] = [
    { username: "John", email: "john@mail.com" },
    { username: "Jane", email: "jane@mail.com" }
  ];

  calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
  };
}
