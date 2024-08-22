import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafaComponenentsComponent } from './rafa-componenents.component';

describe('RafaComponenentsComponent', () => {
  let component: RafaComponenentsComponent;
  let fixture: ComponentFixture<RafaComponenentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RafaComponenentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RafaComponenentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
