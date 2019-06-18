import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  this.contestants: Array<string>;
  
  constructor() { }
  
  getContestants() {
    return this.contestants;
  }
  
  addContestants(player: string) {
    if (player === null || player === '' || this.contestants.indexOf(player) >= 0 ) {
      throw new Error('Invalid, Player must be defined and not duplicate');
    }
    this.contestants.push(player);
  }
}
