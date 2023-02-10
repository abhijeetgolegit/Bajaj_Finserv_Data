import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStructuralDirectiveComponent } from './demo-structural-directive.component';

describe('DemoStructuralDirectiveComponent', () => {
  let component: DemoStructuralDirectiveComponent;
  let fixture: ComponentFixture<DemoStructuralDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoStructuralDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
