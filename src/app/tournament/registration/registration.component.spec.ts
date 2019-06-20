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
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
