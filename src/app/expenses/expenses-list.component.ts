import { Component } from '@angular/core';

@Component({
  selector: 'expenses-list',
  template: `
  <div class="container list-container">
    <div class="row">
      <expense-thumbnail *ngFor="let expense of expenses" [expense]="expense"></expense-thumbnail>
      </div>
    </div>
  `,
  styles: [`
    .list-container {
      padding: 10px;
      margin: 30px auto;
      width: 700px;
      align-content: center;
      background-color: transparent;
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
