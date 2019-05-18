import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-entry-modal',
  templateUrl: './entry-modal.component.html',
  styleUrls: ['./entry-modal.component.scss']
})
export class EntryModalComponent implements OnInit {
  @Input() id:number

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
