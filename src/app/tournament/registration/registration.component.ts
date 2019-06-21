import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public players: string[];
  public messages: any;

  
  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    this.players = ['','','','','','','',''];
    this.messages = '';
  }
  
  trackByFn(index: any, item: any) {
    return index;
  }
  
  autofillTwoPlayers() {
    this.players[0] = 'John';
    this.players[1] = 'Kevin';
  }
  
  autofillFourPlayers() {
    this.players[0] = 'John';
    this.players[1] = 'Stein';
    this.players[2] = 'Saitama';
    this.players[3] = 'Levi';
  }
  
  registerContestants() {
    let roster = [];
    try {
      for (var index = 0; index < this.players.length; index++) {
        if (this.players[index] != '' || this.players[index] != null || this.players[index] != undefined) {
          roster.push(this.players[index]);
        } 
      }
      
      if (roster.length === 2 || roster.length === 4 || roster.length === 8) {
        for (var index = 0; index < roster.length; index++) {
          this.rosterService.addContestant(roster[index]);
        }
        this.messages = roster;
      } else {
        this.messages = 'Contestants should be 2, 4, or 8';
      }
    } catch (err){
      this.messages = "Error in register contestants: " + err;
    }
  }

}
