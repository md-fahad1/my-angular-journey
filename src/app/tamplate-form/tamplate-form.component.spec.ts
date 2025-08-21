import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamplateFormComponent } from './tamplate-form.component';

describe('TamplateFormComponent', () => {
  let component: TamplateFormComponent;
  let fixture: ComponentFixture<TamplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TamplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
