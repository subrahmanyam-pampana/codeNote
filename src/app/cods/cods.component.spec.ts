import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodsComponent } from './cods.component';

describe('CodsComponent', () => {
  let component: CodsComponent;
  let fixture: ComponentFixture<CodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
