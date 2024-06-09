import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterOrdersComponent } from './alter-orders.component';

describe('AlterOrdersComponent', () => {
  let component: AlterOrdersComponent;
  let fixture: ComponentFixture<AlterOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlterOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlterOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
