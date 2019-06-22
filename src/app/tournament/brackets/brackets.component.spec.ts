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
});
