import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RosterService = TestBed.get(RosterService);
    expect(service).toBeTruthy();
  });
  
  it('should not allow duplicate names', () => {
    const rosterService = new RosterService();
    rosterService.addContestant("John");
    rosterService.addContestant("John")
    expect(rosterService.getContestants).toThrow();
  });
});
