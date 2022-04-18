import { TestBed } from '@angular/core/testing';

import { WorkTimesService } from './work-times.service';

describe('WorkTimesService', () => {
  let service: WorkTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
