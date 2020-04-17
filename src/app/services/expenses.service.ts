import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import Expense from '../models/expense';

const initialValue = [
    new Expense('Préstamo', new Date().toISOString(), 834.34),
    new Expense('Luz', new Date().toISOString(), 58.34),
    new Expense('Agua', new Date().toISOString(), 12.43),
    new Expense('Mercadona', new Date().toISOString(), 44.09),
    new Expense('Vodafone', new Date().toISOString(), 30),
];

@Injectable({
    providedIn: 'root'
})
export class ExpensesService {
    private expenses$ = new BehaviorSubject<Expense[]>(initialValue);

    expensesObs() {
        return this.expenses$.asObservable();
    }

    addExpense(e) {
        const expenses = [e, ...this.expenses$.getValue()];
        this.expenses$.next(expenses);
    }

    deleteExpense(e) {
        const expenses = [...this.expenses$.getValue()];
        const index = expenses.indexOf(e);
        expenses.splice(index, 1);
        this.expenses$.next(expenses);
    }

    editExpense(e) {
        const expenses = [...this.expenses$.getValue()];
        const index = expenses.indexOf(e);
        expenses[index] = e;
        this.expenses$.next(expenses);
    }
}
