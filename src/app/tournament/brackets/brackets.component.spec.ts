import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BracketsComponent } from './brackets.component';
import { RosterService } from '../../roster.service';

describe('BracketsComponent', () => {
  let component: BracketsComponent;
  let fixture: ComponentFixture<BracketsComponent>;
  let rosterService = RosterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule],
      declarations: [ BracketsComponent ],
      providers: [ RosterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set isFirstRound to true when players equal 8', () => {
    component.players = ['Garo', 'Genos', 'Roy', 'Nelson', 'Luka', 'Modric', 'Kross', 'Baros'];
    expect(component.isFirstRound()).toBeTruthy();
  });
  
  it('should set isFirstRound to false when players less than 8', () => {
    component.players = ['Garo', 'Genos', 'Roy', 'Nelson'];
    expect(component.isFirstRound()).toBeFalsy();
  });
  
  it('should set isSecondRound to true when players equal 4', () => {
    component.players = ['Garo', 'Genos', 'Roy', 'Nelson'];
    expect(component.isSecondRound()).toBeTruthy();
  });
  
  it('should set isSecondRound to false when players less than 4', () => {
    component.players = ['Garo', 'Genos'];
    expect(component.isSecondRound()).toBeFalsy();
  });
  
  it('should set isThirdRound to true when players equal 2', () => {
    component.players = ['Garo', 'Genos'];
    expect(component.isThirdRound()).toBeTruthy();
  });
  
  it('should set isThirdRound to false when players less than 2', () => {
    component.players = ['Garo'];
    expect(component.isThirdRound()).toBeFalsy();
  });
  
  it('should set roundNumber to 1', () => {
    component.players = ['Garo', 'Genos', 'Roy', 'Nelson', 'Luka', 'Modric', 'Kross', 'Baros'];
    expect(component.roundNumber).toEqual(1);
    component.completeRound();
    expect(component.roundNumber).toEqual(2);
    component.completeRound();
    expect(component.roundNumber).toEqual(3);
  });
  
  it('should set appropriate roundNumber when completeRound', () => {
    component.players = ['Garo', 'Genos', 'Roy', 'Nelson', 'Luka', 'Modric', 'Kross', 'Baros'];
    expect(component.roundNumber).toEqual(1);
    component.completeRound();
    expect(component.roundNumber).toEqual(2);
    component.completeRound();
    expect(component.roundNumber).toEqual(3);
  });
  
  it('should set winner after completeRound', () => {
    component.roundWinners = ['Garo'];
    component.completeRound();
    expect(component.winner).toEqual('Winner is Garo');
  });
  
   it('should set roundWinners to empty after completeRound', () => {
    component.roundWinners = ['Garo'];
    component.completeRound();
    expect(component.roundWinners).toEqual([]);
  });
  
  it('should set same roundNumber when game over', () => {
    component.roundWinners = ['Garo', ];
    component.roundNumber = 2;
    component.completeRound();
    expect(component.roundNumber).toEqual(2);
  });
  
   it('should set players to empty when game over', () => {
    component.roundWinners = ['Garo', ];
    component.completeRound();
    expect(component.players).toEqual([]);
  });
});
