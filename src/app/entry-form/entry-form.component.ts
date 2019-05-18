import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'entry-form',
  templateUrl: './entry-form.component.html'
})
export class EntryFormComponent {
  @Input()id: number;
  myForm: FormGroup;
  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {
    this.createForm();
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      amount: '',
      description: ''
    });
  }
  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }
}