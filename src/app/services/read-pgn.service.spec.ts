import { TestBed } from '@angular/core/testing';

import { ReadPgnService } from './read-pgn.service';

describe('ReadPgnService', () => {
  let service: ReadPgnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadPgnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
