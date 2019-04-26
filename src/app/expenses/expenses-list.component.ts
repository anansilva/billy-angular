import { Component } from '@angular/core';

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
      width: 700px;
    }
    .card-col {
      padding-top: 15px;
    }
  `]
})
export class ExpensesListComponent {
  expenses = [
    {
      id: 1,
      amount: 10,
      description: 'pingo doce',
      category: 'food&groceries'
    },
    {
      id: 2,
      amount: 11,
      description: 'bilhetes concerto',
      category: 'entertainment'
    },
    {
      id: 3,
      amount: 500,
      description: 'renda maio',
      category: 'rent'
    },
    {
      id: 4,
      amount: 55,
      description: 'eletricidade',
      category: 'utilities'
    },
    {
      id: 5,
      amount: 10,
      description: 'livros',
      category: 'other'
    },
  ]
}
