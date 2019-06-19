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
  
 
}
