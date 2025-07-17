import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { KENDO_PROGRESSBAR } from '@progress/kendo-angular-progressbar';
import { AnimateOnScrollModule } from 'primeng/animateonscroll'

import { ModalComponentComponent } from '../subcomponents/modal-component/modal-component.component';

@Component({
  selector: 'app-home',
  providers: [NoopAnimationsModule ],
  imports: [KENDO_PROGRESSBAR, AnimateOnScrollModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
})
export class HomeComponent {

  public value1 = 90;
  public value2 = 89;
  public value3 = 60; 
  public value4 = 30;
  public value5 = 15;
  public content = "";
  closeResult = ''; 
  
  constructor(
    config: NgbModalConfig, 
    private modalService: NgbModal) { 
      //config.backdrop = 'static';
      //config.keyboard = false;
  }  
 
  open(objParam : any) { 
    const modalRef = this.modalService.open(ModalComponentComponent, { 
      windowClass: 'dark-modal', 
      centered: true,
      animation: true,
      backdrop: true,
      backdropClass: 'modal-adjustbackdrop',
      size: 'xl'  });

      modalRef.componentInstance.imageOne = (objParam.imageId === 1 ? true : false);
      modalRef.componentInstance.imageTwo = (objParam.imageId === 2 ? true : false); 
      modalRef.componentInstance.imageThree = (objParam.imageId === 3 ? true : false); // assign image id 
      
      modalRef.result.then((result) => {
        console.log(`Closed with: ${result}`);
      }, (reason) => {
        console.log(`Dismissed ${this.getDismissReason(reason)}`);
      });     
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
