import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { catchError, map, Observable } from 'rxjs';
import { workLog } from '../model/log'

import {miscFunctions} from '../../functions/misc'

@Injectable({
  providedIn: 'root'
})
export class WorkTimesService {

  url = "http://localhost:3000/"

  constructor(private http: HttpClient, private mF: miscFunctions) { }

  public newWorkTime(formResults: FormGroup): Observable<any> {

      let form = { date: formResults.get('date').value,
                  start: formResults.get('start').value,
                  finish: formResults.get('finish').value,
                  description: formResults.get('description').value,
                  association: formResults.get('association').value
                }

      console.log(form)
      let URL = this.url + "newLog";

    return this.http.post<any>(URL,form)
  }

  public getWorkTimes(): Observable<Array<workLog>> {
    let URL = this.url + "workLog";
    return this.http.get<any>(URL).pipe( map( res => {
     
       let log: workLog;
       let workLogs = new Array<workLog>();

      res.forEach(element => {
            log = new workLog();

            log.id          = element.id;
            log.association = element.association;
            log.date        = element.date;
            log.start       = element.start;
            log.finish      = element.finish;
            log.description = element.description;

            //Calculate the total time worked
            let start = element.start.split(":");
            let finish = element.finish.split(":");

            log.totalTime = (finish[0] - start[0]) + ":" + (finish[1] - start[1]) + ":" + (finish[2] - start[2]);

            workLogs.push(log);
      });
    
      return workLogs;
    } ))
  }

}
