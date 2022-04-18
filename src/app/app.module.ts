import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms' 
import {RoutingModule} from '../app/routes/routing/routing.module'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { WorkTimesComponent } from './work-times/Insert/work-times/work-times.component';
import { DisplayWorkLogComponent } from './work-times/review/display-work-log/display-work-log.component';
import { DayPipePipe } from './work-times/day-pipe.pipe';

import {miscFunctions} from './functions/misc' 

@NgModule({
  declarations: [
    AppComponent,
    WorkTimesComponent,
    DisplayWorkLogComponent,
    DayPipePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [miscFunctions],
  bootstrap: [AppComponent]
})
export class AppModule { }
