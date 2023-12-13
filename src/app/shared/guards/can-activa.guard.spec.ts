import { TestBed } from '@angular/core/testing';

import { CanActivaGuard } from './can-activa.guard';

describe('CanActivaGuard', () => {
  let guard: CanActivaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
