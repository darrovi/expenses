import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import Expense from '../models/expense';

@Injectable({
    providedIn: 'root'
})
export class ExpensesService {
    private expenses$ = new BehaviorSubject<Expense[]>([]);

    constructor() {
    }

    expensesObs() {
        return this.expenses$.asObservable();
    }

    addExpense(e) {
        const expenses = [...this.expenses$.getValue(), e];
        this.expenses$.next(expenses);
    }

}
