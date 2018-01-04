import { TestBed, inject } from '@angular/core/testing';

import { ListoperationsService } from './listoperations.service';

describe('ListoperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListoperationsService]
    });
  });

  it('should be created', inject([ListoperationsService], (service: ListoperationsService) => {
    expect(service).toBeTruthy();
  }));
});
