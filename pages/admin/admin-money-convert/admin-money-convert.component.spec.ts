import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoneyConvertComponent } from './admin-money-convert.component';

describe('AdminMoneyConvertComponent', () => {
  let component: AdminMoneyConvertComponent;
  let fixture: ComponentFixture<AdminMoneyConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMoneyConvertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMoneyConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
