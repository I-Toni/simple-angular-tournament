import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './tournament/hello/hello.component';
import { RegistrationComponent } from './tournament/registration/registration.component';
import { BracketsComponent } from './tournament/brackets/brackets.component';

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full'},
  { path: 'hello', component: HelloComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'brackets', component: BracketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HelloComponent, RegistrationComponent, BracketsComponent]
