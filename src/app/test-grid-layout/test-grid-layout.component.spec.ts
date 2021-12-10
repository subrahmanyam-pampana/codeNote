import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGridLayoutComponent } from './test-grid-layout.component';

describe('TestGridLayoutComponent', () => {
  let component: TestGridLayoutComponent;
  let fixture: ComponentFixture<TestGridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestGridLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
