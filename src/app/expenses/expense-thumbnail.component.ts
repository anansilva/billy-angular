import { Component, Input } from '@angular/core';

@Component({
  selector: 'expense-thumbnail',
  template: `
  <div class="col-xs-12 col-sm-4">
    <div class="card expense-card">
      <h2>{{expense.description}}</h2>
      <div>Amount: {{expense.amount}}</div>
      <div>Category: {{expense.category}}</div>
    </div>
  </div>
  `,
  styles: [`
    .expense-card {
      background-color: white;
    }
  `]
})
export class ExpenseThumbnailComponent {
  @Input() expense:any
}
