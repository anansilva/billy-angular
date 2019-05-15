import { Injectable } from '@angular/core'
import { IExpense } from './expense.model'

@Injectable()
export class ExpenseService {
  getExpenses():IExpense[] {
    return EXPENSES
  }
}

const EXPENSES:IExpense[] = [
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
