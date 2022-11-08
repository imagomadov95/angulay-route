import { TestBed } from '@angular/core/testing';

import { OffGuard } from './off.guard';

describe('OffGuard', () => {
  let guard: OffGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OffGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
