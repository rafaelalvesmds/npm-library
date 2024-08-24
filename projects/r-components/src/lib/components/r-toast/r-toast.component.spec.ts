import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RToastComponent } from './r-toast.component';

describe('RToastComponent', () => {
  let component: RToastComponent;
  let fixture: ComponentFixture<RToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
