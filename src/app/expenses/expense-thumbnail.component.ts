import { Component, Input } from '@angular/core';

@Component({
  selector: 'expense-thumbnail',
  template: `
  <div>
    <h2>{{expense.description}}</h2>
    <div>Amount: {{expense.amount}}</div>
    <div>Category: {{expense.category}}</div>
  <div>
  `
})
export class ExpenseThumbnailComponent {
  @Input() expense:any
}
