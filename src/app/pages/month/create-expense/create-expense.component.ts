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
    expense = new Expense('Préstamo', new Date().toISOString(), 743.54);

    constructor(private modalController: ModalController,
                private expensesService: ExpensesService) {
    }

    onClose() {
        this.modalController.dismiss();
    }

    onSubmit() {
        this.expensesService.addExpense(this.expense);
        this.modalController.dismiss();
    }
}
