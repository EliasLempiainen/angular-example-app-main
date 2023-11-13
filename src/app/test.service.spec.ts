import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add numbers correctly', () => {
    const result = service.addNumbers(3, 4);
    expect(result).toBe(7);
  });

  it('should concatenate strings correctly', () => {
    const result = service.addStrings('Hello', 'World');
    expect(result).toBe('HelloWorld');
  });
});
