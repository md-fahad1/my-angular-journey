import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassInterfaceComponent } from './class-interface.component';

describe('ClassInterfaceComponent', () => {
  let component: ClassInterfaceComponent;
  let fixture: ComponentFixture<ClassInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
