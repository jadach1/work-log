import { Pipe, PipeTransform } from '@angular/core';
import {workLog} from './model/log'

@Pipe({
  name: 'makeMyDayPipe'
})
export class DayPipePipe implements PipeTransform {

  transform(logs: workLog[]): workLog {
    let newLogs = logs;
    console.log(logs)
    return newLogs[0]
  }

}
