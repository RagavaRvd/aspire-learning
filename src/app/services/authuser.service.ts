import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class AuthService {
  constructor() {}
  get() {
    return {name:'praba',age:20}
  }
}
