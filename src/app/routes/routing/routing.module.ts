import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WorkTimesComponent} from '../../work-times/Insert/work-times/work-times.component'
import {DisplayWorkLogComponent} from '../../work-times/review/display-work-log/display-work-log.component'

const routes: Routes = [
  {path: "insert", component: WorkTimesComponent},
  {path: "display", component: DisplayWorkLogComponent},
  {path: "", component: WorkTimesComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule { }
