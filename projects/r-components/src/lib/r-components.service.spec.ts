import { TestBed } from '@angular/core/testing';
import { RComponentsService } from './r-components.service';

describe('RComponentsService', () => {
  let service: RComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
