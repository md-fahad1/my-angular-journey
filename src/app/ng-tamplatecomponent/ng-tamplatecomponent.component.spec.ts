import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTamplatecomponentComponent } from './ng-tamplatecomponent.component';

describe('NgTamplatecomponentComponent', () => {
  let component: NgTamplatecomponentComponent;
  let fixture: ComponentFixture<NgTamplatecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTamplatecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTamplatecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
