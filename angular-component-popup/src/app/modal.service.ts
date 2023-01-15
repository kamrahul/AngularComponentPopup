import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  // Created behaviour subject display which holds 2 values open|close 
  display: BehaviorSubject<'open' | 'close'>  = new BehaviorSubject<'open' | 'close'>('close');

  watch(): Observable<'open' | 'close'> {
    console.log(" Watch funciton called ")
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }


}
