import { Component } from '@angular/core';

@Component({
  selector: 'expenses-list',
  template: `
    <div>
      <h1>Latest Expenses</h1>
      <hr/>
    </div>
    <expense-thumbnail [expense]="expense1"></expense-thumbnail>
  `
})
export class ExpensesListComponent {
  expense1 = {
    id: 1,
    amount: 10,
    description: 'my first expense',
    category: 'pingo doce'
  }
}
