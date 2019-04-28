import { Injectable } from '@angular/core'

@Injectable()
export class ExpenseService {
  getExpenses() {
    return EXPENSES
  }
}

const EXPENSES = [
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
