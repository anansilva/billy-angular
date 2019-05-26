import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseService } from '../expenses/shared/expense.service';

@Component({
  selector: 'entry-form',
  templateUrl: './entry-form.component.html',
  styles: [`
    .error {color: red; font-size: 12px;}
  `]
})
export class EntryFormComponent {
  @Input()id: number;
  entryForm: FormGroup;  

  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder,
   private expenseService: ExpenseService,
  ) {
    this.createForm();
  }
  private createForm() {
    this.entryForm = this.formBuilder.group({
      amount: ['', Validators.required],
      description: ['', Validators.required],
      date: [],
      category: '',
    });
  }
  public validateAmount() {
    return this.entryForm.controls.amount.valid || this.entryForm.controls.amount.untouched;
  }
  
  private submitForm(formValues) {
    this.expenseService.saveExpense(this.entryForm.value);
    this.activeModal.close(this.entryForm.value);
  }
}