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
  

    
  }
}
