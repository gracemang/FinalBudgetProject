import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBudgetComponent } from './CreateNewBudget.component';

describe('CreateNewBudgetComponent', () => {
  let component: CreateNewBudgetComponent;
  let fixture: ComponentFixture<CreateNewBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
