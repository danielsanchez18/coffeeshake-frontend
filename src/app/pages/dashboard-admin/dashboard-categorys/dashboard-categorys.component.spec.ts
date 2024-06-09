import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategorysComponent } from './dashboard-categorys.component';

describe('DashboardCategorysComponent', () => {
  let component: DashboardCategorysComponent;
  let fixture: ComponentFixture<DashboardCategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCategorysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
