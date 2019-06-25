import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RosterService } from '../../roster.service';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';

describe('RegistrationComponent with Real Service', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let rosterService = RosterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule],
      declarations: [ RegistrationComponent ],
      providers: [ RosterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create registraion component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have size of players set to 8', () => {
    expect(component.players.length).toEqual(8);
  });
  
  it('should not register an invalid number of players', () => {
    component.players = ['john', 'kevin', 'ross'];
    component.registerContestants();
    expect(component.messages).toEqual('Contestants should be 2, 4, or 8');
  });
  
  it('should not register an empty players', () => {
    component.players = ['', ''];
    component.registerContestants();
    expect(component.messages).toEqual('Contestants should be 2, 4, or 8');
  });
  
  it('should not register an empty sring between three valid players', () => {
    component.players = ['John', '', 'Kevin', 'Rose'];
    component.registerContestants();
    expect(component.messages).toEqual('Contestants should be 2, 4, or 8');
  });
  
  it('should not register over 8 players', () => {
    component.players = ['John', 'Ross', 'Kevin', 'Rose', 'Jake', 'Franklin', 'Ahmed', 'Milos', 'Near'];
    component.registerContestants();
    expect(component.messages).toEqual('Contestants should be 2, 4, or 8');
  });
  
  it('should not register any duplicate players', () => {
    component.players = ['john', 'john', 'john', 'john'];
    component.registerContestants();
    expect(component.messages).toEqual('Register contestants: Error: Player must not be duplicate');
  });
  
  it('should auto fill two players', () => {
    component.autofillTwoPlayers();
    expect(component.players[0]).toEqual('John');
    expect(component.players[1]).toEqual('Kevin');
  });
  
  it('should insert four names in players', () => {
    component.autofillFourPlayers();
    expect(component.players[0]).toEqual('John');
    expect(component.players[1]).toEqual('Stein');
    expect(component.players[2]).toEqual('Saitama');
    expect(component.players[3]).toEqual('Levi');
  });
  
  it('should insert eight names in players', () => {
    component.autofillEightPlayers();
  expect(component.players).toEqual(['Elrich', 'Sebastian', 'Hatake', 'Bruce', 'Derek', 'Raonic', 'Nadal', 'Messi']);
  });
});
