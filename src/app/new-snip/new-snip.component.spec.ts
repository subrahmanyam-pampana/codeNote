import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSnipComponent } from './new-snip.component';

describe('NewSnipComponent', () => {
  let component: NewSnipComponent;
  let fixture: ComponentFixture<NewSnipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSnipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSnipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
