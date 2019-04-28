import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './shared/expense.service'

@Component({
  selector: 'expenses-list',
  template: `
  <div class="container card-container">
    <div class="row justify-content-center">
      <div class="col card-col">
        <expense-thumbnail *ngFor="let expense of expenses" [expense]="expense"></expense-thumbnail>
      </div>
    </div>
    </div>
  `,
  styles: [`
    .card-container {
      margin: 30px auto;
      max-width: 500px;
    }
    .card-col {
      padding-top: 15px;
    }
  `]
})
export class ExpensesListComponent implements OnInit {
  expenses:any[]

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit() {
    this.expenses = this.expenseService.getExpenses()
  }
}
