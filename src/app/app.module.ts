import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RosterService } from './roster.service';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
