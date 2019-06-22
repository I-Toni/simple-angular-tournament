import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  contestants = [];
  
  constructor() { }
  
  ngOnInit() {
  }

  getContestants() {
    return this.contestants;
  }
  
  addContestant(player: string) {
    if (player === null ) {
      throw new Error('Player can not be null');
    };
    if (player === '') {
      throw new Error('Player must not be empty');
    };
    if (this.contestants.indexOf(player) >= 0 ) {
      throw new Error('Player must not be duplicate');
    };
    this.contestants.push(player);
  }
  
  removeContestants() {
    this.contestants = [];
  }
}
