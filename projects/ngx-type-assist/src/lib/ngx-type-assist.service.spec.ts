import { TestBed } from '@angular/core/testing';

import { NgxTypeAssistService } from './ngx-type-assist.service';

describe('NgxTypeAssistService', () => {
  let service: NgxTypeAssistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTypeAssistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
