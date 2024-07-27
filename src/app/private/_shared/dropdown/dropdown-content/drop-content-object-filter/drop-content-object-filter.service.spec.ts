import { TestBed } from '@angular/core/testing';

import { DropContentObjectFilterService } from './drop-content-object-filter.service';

describe('DropContentObjectFilterService', () => {
  let service: DropContentObjectFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropContentObjectFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
