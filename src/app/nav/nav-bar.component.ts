import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntryModalComponent } from '../entry-modal/entry-modal.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.scss']
})

export class NavBarComponent {

  constructor(
    private modalService: NgbModal
  ) { }

  openFormModal() {
    const modalRef = this.modalService.open(EntryModalComponent);
    modalRef.componentInstance.id = 1;
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
