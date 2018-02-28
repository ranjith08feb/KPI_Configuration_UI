import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }        from './app.component';
import { DefinitionComponent } from './definition/definition.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputsComponent } from './inputs/inputs.component';


@NgModule({
  declarations: [
    AppComponent,
    DefinitionComponent,
    DashboardComponent,
    InputsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
