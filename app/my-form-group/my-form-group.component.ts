import { GroupsService } from './../service/groups.service';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl,Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-my-form-group',
  templateUrl: './my-form-group.component.html',
  styleUrls: ['./my-form-group.component.scss'],
})
export class MyFormGroupComponent implements OnInit {
  public str_= "";
  public myFormGroup: FormGroup;
  public form = new FormArray([]);

  constructor(public groups:GroupsService) {
    this.myFormGroup = new FormGroup({
    course1: new FormControl('',[Validators.required,Validators.min(0)]),
    course2: new FormControl('',[Validators.required,Validators.min(0)]),
    course3: new FormControl('',[Validators.required,Validators.min(0)]),
    course4: new FormControl('',[Validators.required,Validators.min(0)]),
    course5: new FormControl('',[Validators.required,Validators.min(0)]),
  }); 
  }
  
  @Output() public outToParent = new EventEmitter();
  mass() {
    let courses = [this.myFormGroup.value.course1,this.myFormGroup.value.course2,this.myFormGroup.value.course3,this.myFormGroup.value.course4,this.myFormGroup.value.course5]
    for (let i = 0; i < 5; i++) {
      this.form.push(new FormArray([]))
      for (let j = 0; j < courses[i]; j++) {
        (this.form.at(i) as FormArray).push(new FormControl('',[Validators.required,Validators.min(0)]))
      }
    }
  }
  sendToParent() {
    this.ras();
    this.outToParent.emit(this.str_);
  }
  ras(){
    let st=this.groups.result(this.form.value);
    for(let i = 0; i< 5; i++){
      this.str_+= "Загальна кількість студентів на курсі "+(i+1)+": "+st[i]+". ";
    }
  }
  onSubmit() {
    console.log(this.myFormGroup.value);
  }
  onSubmit_2() {
    console.log(this.form.value);
  }
  ngOnInit() {}

}
