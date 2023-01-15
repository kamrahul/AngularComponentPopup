import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // Observable variable 
  display$!: Observable<'open' | 'close'>;

  constructor( private modalService: ModalService) { }

  ngOnInit() {
    // When component loads this line will check the latest state of behavior object
    console.log("On init called Model Popup")
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

}
