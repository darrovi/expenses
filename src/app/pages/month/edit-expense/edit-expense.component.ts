import {Component, Input} from '@angular/core';
import Expense from '../../../models/expense';
import {ModalController} from '@ionic/angular';
import {ExpensesService} from '../../../services/expenses.service';

@Component({
    selector: 'app-edit-expense',
    templateUrl: './edit-expense.component.html',
    styleUrls: ['./edit-expense.component.scss'],
})
export class EditExpenseComponent {
    @Input() expense: Expense;

    constructor(private modalController: ModalController,
                private expensesService: ExpensesService) {
    }

    onClose() {
        this.modalController.dismiss();
    }

    onSubmit(expense: Expense) {
        this.expensesService.editExpense(expense);
        this.modalController.dismiss();
    }
}
