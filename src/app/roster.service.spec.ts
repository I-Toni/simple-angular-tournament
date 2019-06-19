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
    expect(function() {rosterService.addContestant("John");}).toThrow(new Error('Player must not be duplicate'));
  });
  
  it('should not allow null names', () => {
    const rosterService = new RosterService();
    expect(function() {rosterService.addContestant(null);}).toThrow(new Error('Player can not be null'));
  });
  
  it('should not allow empty string names', () => {
    const rosterService = new RosterService();
    expect(function() {rosterService.addContestant('');}).toThrow(new Error('Player must not be empty'));
  });
  
  it('should add one contestant', () => {
    const rosterService = new RosterService();
    rosterService.addContestant('Kevin');
    expect(rosterService.getContestants()).toEqual(['Kevin']);
  });
});
