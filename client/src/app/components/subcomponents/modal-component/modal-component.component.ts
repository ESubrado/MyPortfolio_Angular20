import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.css',
  standalone: false
})
export class ModalComponentComponent {

  @Input() imageOne : any;
  @Input() imageTwo : any;
  @Input() imageThree: any;

   constructor(public activeModal: NgbActiveModal) { }

}
