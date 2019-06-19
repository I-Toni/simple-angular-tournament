import { Component, OnInit } from '@angular/core';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public players: string[];
  public informationMessages: string;

  
  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    this.players = ['','','','','','','',''];
    this.informationMessages = '';
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
      }
    } catch (err){
      console.log("Error in register contestants: ", err);
    }
  }

}
