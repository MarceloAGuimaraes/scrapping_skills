import { TestBed } from '@angular/core/testing';

import { CheckPunctuationService } from './check-punctuation.service';

describe('CheckPunctuationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckPunctuationService = TestBed.get(CheckPunctuationService);
    expect(service).toBeTruthy();
  });
});
