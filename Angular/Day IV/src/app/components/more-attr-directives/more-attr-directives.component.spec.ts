import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAttrDirectivesComponent } from './more-attr-directives.component';

describe('MoreAttrDirectivesComponent', () => {
  let component: MoreAttrDirectivesComponent;
  let fixture: ComponentFixture<MoreAttrDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAttrDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreAttrDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
