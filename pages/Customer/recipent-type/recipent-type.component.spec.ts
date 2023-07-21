import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipentTypeComponent } from './recipent-type.component';

describe('RecipentTypeComponent', () => {
  let component: RecipentTypeComponent;
  let fixture: ComponentFixture<RecipentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipentTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
