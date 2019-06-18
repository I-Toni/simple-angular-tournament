import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { RegistrationComponent } from './registration/registration.component';
import { BracketsComponent } from './brackets/brackets.component';

const routes: Routes = [
  { path: '', component: HelloComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'brackets', component: BracketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HelloComponent, RegistrationComponent, BracketsComponent]
