import {Component, EventEmitter, Input, Output} from '@angular/core';
import Expense from '../../../models/expense';

@Component({
    selector: 'app-expense-form',
    templateUrl: './expense-form.component.html',
    styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent {
    @Input() expense: Expense;
    @Input() buttonText: string;
    @Output() onSubmit = new EventEmitter();
}
