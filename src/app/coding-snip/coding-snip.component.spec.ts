import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingSnipComponent } from './coding-snip.component';

describe('CodingSnipComponent', () => {
  let component: CodingSnipComponent;
  let fixture: ComponentFixture<CodingSnipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingSnipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingSnipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
