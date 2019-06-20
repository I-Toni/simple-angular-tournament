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
   public roundWinners: string[];
   public winner: string;
   
  constructor(private rosterService: RosterService) { }
  
  ngOnInit() {
    this.players = this.rosterService.getContestants();
    this.roundNumber = 1;
    this.roundWinners = [];
    this.winner = '';
  }
  
  trackByFn(index: any, item: any) {
    return index;
  }

  completeRound() {
    this.roundNumber += 1;
    if (this.roundWinners.length != 1) {
      for (var index = 0; index < this.players.length; index++) {
         this.roundWinners.push(this.players[index]);
      }
      this.players = this.roundWinners;
    } else {
      this.winner = 'Winner is ' + this.roundWinners[0];
    }
  }
}
