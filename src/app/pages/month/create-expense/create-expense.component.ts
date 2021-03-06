import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import Expense from '../../../models/expense';
import {ExpensesService} from '../../../services/expenses.service';

@Component({
    selector: 'app-create-expense',
    templateUrl: './create-expense.component.html',
    styleUrls: ['./create-expense.component.scss'],
})
export class CreateExpenseComponent {
    expense = new Expense('', new Date().toISOString());

    constructor(private modalController: ModalController,
                private expensesService: ExpensesService) {
    }

    onClose() {
        this.modalController.dismiss();
    }

    onSubmit(expense: Expense) {
        this.expensesService.addExpense(expense);
        this.modalController.dismiss();
    }
}
