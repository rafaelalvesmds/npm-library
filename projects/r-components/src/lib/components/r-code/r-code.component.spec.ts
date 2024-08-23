import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RCodeComponent } from './r-code.component';

describe('RCodeComponent', () => {
  let component: RCodeComponent;
  let fixture: ComponentFixture<RCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
