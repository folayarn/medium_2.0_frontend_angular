import { TestBed } from '@angular/core/testing';

import { PrivateAuthGuard } from './private-auth.guard';

describe('PrivateAuthGuard', () => {
  let guard: PrivateAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrivateAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
