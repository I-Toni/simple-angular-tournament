import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RosterService } from './roster.service';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
