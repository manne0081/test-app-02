import { TestBed } from '@angular/core/testing';

import { DropContentFilterService } from './drop-content-filter.service';

describe('DropContentObjectFilterService', () => {
  let service: DropContentFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropContentFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
