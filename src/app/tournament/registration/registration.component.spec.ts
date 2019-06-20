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
  
  it('should not register an invalid number of players', () => {
    component.players = ['john', 'kevin', 'ross'];
    component.registerContestants();
    expect(component.messages).toEqual('Contestants should be 2, 4, or 8');
  });
});
