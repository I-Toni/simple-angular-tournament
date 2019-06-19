import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public players: string[];
  public messages: string;

  
  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    this.players = ['','','','','','','',''];
    this.messages = '';
  }
  
  registerContestants() {
    var roster = [];
    try {
      for (var index = 0; index < players.length; index++) {
        if (players[index] != '' || players[index] != null || players[index] != undefined) {
          roster[index] = players[index];
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
