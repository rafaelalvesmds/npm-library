import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RButtonComponent } from './button.component';

describe('RButtonComponent', () => {
  let component: RButtonComponent;
  let fixture: ComponentFixture<RButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
