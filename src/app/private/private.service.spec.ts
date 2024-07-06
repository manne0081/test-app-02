/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrivateService } from './private.service';

describe('Service: Private', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateService]
    });
  });

  it('should ...', inject([PrivateService], (service: PrivateService) => {
    expect(service).toBeTruthy();
  }));
});
