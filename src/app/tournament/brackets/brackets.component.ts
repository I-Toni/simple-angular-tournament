import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
   public players: string[];
   public roundNumber: number;
   
  constructor(private rosterService: RosterService) { }
  
  ngOnInit() {
    this.players = this.rosterService.getContestants();
    this.roundNumber = 1;
  }

  completeRound() {
    this.roundNumber += 1;
  }
}
