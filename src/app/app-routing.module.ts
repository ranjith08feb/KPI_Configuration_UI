import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';
 
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DefinitionComponent }   from './definition/definition.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'definition', component: DefinitionComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}