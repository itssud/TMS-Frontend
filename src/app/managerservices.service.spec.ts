import { TestBed } from '@angular/core/testing';

import { ManagerservicesService } from './managerservices.service';

describe('ManagerservicesService', () => {
  let service: ManagerservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
