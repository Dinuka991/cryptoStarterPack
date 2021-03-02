import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSAutilsComponent } from './rsautils.component';

describe('RSAutilsComponent', () => {
  let component: RSAutilsComponent;
  let fixture: ComponentFixture<RSAutilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSAutilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RSAutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
