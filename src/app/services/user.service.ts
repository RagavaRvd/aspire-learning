import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  get() {
    return {name:'ragav',ag:25}
  }
}
