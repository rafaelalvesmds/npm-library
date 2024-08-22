import { TestBed } from '@angular/core/testing';

import { RafaComponenentsService } from './rafa-componenents.service';

describe('RafaComponenentsService', () => {
  let service: RafaComponenentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RafaComponenentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
