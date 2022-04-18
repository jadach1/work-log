import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MessagingServiceService} from '../../../messaging/messaging-service.service'

import {WorkTimesService} from "../../Services/work-times.service"

@Component({
  selector: 'app-work-times',
  templateUrl: './work-times.component.html',
  styleUrls: ['./work-times.component.css']
})
export class WorkTimesComponent implements OnInit {

  myForm: FormGroup;

  constructor(private wtService: WorkTimesService, 
              private toast: MessagingServiceService) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      'date': new FormControl(null,[Validators.required]),
      'association': new FormControl(null,[Validators.required]),
      'start': new FormControl(null,[Validators.required,this.validateTime.bind(this)]),
      'finish': new FormControl(null,[Validators.required,this.validateTime.bind(this)]),
      'description': new FormControl(null,[Validators.required])
    })

  }

  public isValid(): boolean {
    return this.myForm.invalid;
  }

  public onSubmit(){
    this.wtService.newWorkTime(this.myForm)
            .subscribe( res => {console.log(res), 
                                this.toast.showSuccess("Successfully added " + this.myForm.get('description').value)}, 
                        err => {console.log(err), 
                                this.toast.showFailure("Failed to add " + this.myForm.get('description').value)
                                })
  }

  public test() {
    
  }

  private clearDate() {
    console.log("REset")
    this.myForm.get('date').setValue("");
  }

  /*CHECKS TO AKE SURE THAT THE START TIME IS LESS THAN THE FINISHING TIME */
  private validateTime(control: FormControl):  {[s: string]: boolean} {
    if(!control.pristine){
          let start = this.myForm.get('start').value;
          let finis = this.myForm.get('finish').value;  
          if(start > finis) {
            return {'validateTime': true}
          }
    }
    return null;
  }

}
