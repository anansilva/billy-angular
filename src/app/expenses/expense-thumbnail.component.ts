import { Component, Input } from '@angular/core'
import { IExpense } from './shared/expense.model'

@Component({
  selector: 'expense-thumbnail',
  templateUrl: './expense-thumbnail.html',
  styleUrls: ['./expense-thumbnail.scss']
})
export class ExpenseThumbnailComponent {
  @Input() expense:IExpense
}
