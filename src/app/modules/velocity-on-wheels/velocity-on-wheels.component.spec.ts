import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityOnWheelsComponent } from './velocity-on-wheels.component';

describe('VelocityOnWheelsComponent', () => {
  let component: VelocityOnWheelsComponent;
  let fixture: ComponentFixture<VelocityOnWheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelocityOnWheelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelocityOnWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
