import { TestBed } from '@angular/core/testing';

import { ContentTileViewService } from './content-tile-view.service';

describe('ContentTileViewService', () => {
  let service: ContentTileViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentTileViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
