import { TestBed } from '@angular/core/testing';

import { ParentProjectListService } from './parent-project-list.service';

describe('ParentProjectListService', () => {
  let service: ParentProjectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentProjectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
