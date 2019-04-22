import { Component, Input } from '@angular/core';

@Component({
  selector: 'expense-thumbnail',
  templateUrl: './expense-thumbnail.html',
  styleUrls: ['./expense-thumbnail.scss']
})
export class ExpenseThumbnailComponent {
  @Input() expense:any
}
