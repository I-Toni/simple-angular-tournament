import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../roster.service';

@Component({
  selector: 'app-brackets',
  templateUrl: './brackets.component.html',
  styleUrls: ['./brackets.component.css']
})
export class BracketsComponent implements OnInit {
   public players: string[];
   
  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    this.players = this.rosterService.getContestants();
  }

}
