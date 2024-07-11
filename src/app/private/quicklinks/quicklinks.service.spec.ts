/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuicklinksService } from './quicklinks.service';

describe('Service: Quicklinks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuicklinksService]
    });
  });

  it('should ...', inject([QuicklinksService], (service: QuicklinksService) => {
    expect(service).toBeTruthy();
  }));
});
