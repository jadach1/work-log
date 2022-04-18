import { Component, OnInit } from '@angular/core';

import {WorkTimesService} from '../../Services/work-times.service'
import {MessagingServiceService} from '../../../messaging/messaging-service.service'
import { workLog } from '../../model/log'

@Component({
  selector: 'app-display-work-log',
  templateUrl: './display-work-log.component.html',
  styleUrls: ['./display-work-log.component.css']
})
export class DisplayWorkLogComponent implements OnInit {
  logs: workLog[];
  //key is association, 
  Masterlogs: Map<string, Array<workLog>> = new Map(); 
  
  constructor(private wtService: WorkTimesService, 
              private toastr: MessagingServiceService) { }

  ngOnInit(): void {

    this.wtService.getWorkTimes()
                  .subscribe(
                      res => this.logs = res,
                      err => console.log(err), () => this.getMasterlogs() )
                      console.log(this.Masterlogs)
  }

  private mapValue(values: Array<workLog>) {

    values.forEach(element => {

      // Create a key for easier syntax
       let key = element.association + element.date.split("-")[0];

      // Check to see if key exists - association
      if(this.Masterlogs.has(key)){
          this.Masterlogs.get(key).push(element);

      } else {
        // New Entry, create new array of workLogs
         let tempLogs = new Array<workLog>();
        // Set the key, value pair
         this.Masterlogs.set(key, tempLogs);
        // Push new workLog into array of WorkLogs
         tempLogs.push(element);
      }
    })

  }

  public isMonday(date: Date): boolean {
    return true;
  }

  public getMasterlogs(): workLog[]  {
    let tempLogs: workLog[];

     this.Masterlogs.forEach( (value, key) => {
          return value;
     });
     return tempLogs;
  }
}
