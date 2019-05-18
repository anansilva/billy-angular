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
    category: 'food&groceries',
    date: '27/09/2018'
  },
  {
    id: 2,
    amount: 11,
    description: 'bilhetes concerto',
    category: 'entertainment',
    date: '27/09/2018'
  },
  {
    id: 3,
    amount: 500,
    description: 'renda maio',
    category: 'rent',
    date: '27/09/2018'
  },
  {
    id: 4,
    amount: 55,
    description: 'eletricidade',
    category: 'utilities',
    date: '17/09/2018'
  },
  {
    id: 5,
    amount: 10,
    description: 'livros',
    category: 'other',
    date: '27/09/2018'
  },
]
