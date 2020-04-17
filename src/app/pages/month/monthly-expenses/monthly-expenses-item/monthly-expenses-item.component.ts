import {Component, Input} from '@angular/core';
import Expense from '../../../../models/expense';
import {ExpensesService} from '../../../../services/expenses.service';
import {IonItemSliding, ModalController} from '@ionic/angular';
import {EditExpenseComponent} from '../../edit-expense/edit-expense.component';

@Component({
    selector: 'app-monthly-expenses-item',
    templateUrl: './monthly-expenses-item.component.html',
    styleUrls: ['./monthly-expenses-item.component.scss'],
})
export class MonthlyExpensesItemComponent {

    @Input() expense: Expense;

    constructor(public expensesService: ExpensesService,
                public modalController: ModalController) {
    }

    onEdit(slidingItem: IonItemSliding) {
        this.modalController.create({
            component: EditExpenseComponent,
            componentProps: {
                expense: this.expense
            }
        }).then((modal) => {
            modal.present();
            slidingItem.close();
        });
    }

    onDelete(slidingItem: IonItemSliding) {
        this.expensesService.deleteExpense(this.expense);
        slidingItem.close();
    }
}
