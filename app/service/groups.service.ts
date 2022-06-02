import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  sum(mass) {
    let s = 0;
    for (let i = 0; i<mass.length; i++){
      s+=parseInt(mass[i]);
    }
    return s;
  }
  result(mass) {
    let sum_ = [0,0,0,0,0];
    for (let i = 0; i<mass.length; i++){
      sum_[i]+=this.sum(mass[i]);
    }
     return sum_;
  }
  constructor() { }
}
