import {Component, Input, OnInit} from '@angular/core';
import Expense from '../../../../models/expense';

@Component({
    selector: 'app-monthly-expenses-item',
    templateUrl: './monthly-expenses-item.component.html',
    styleUrls: ['./monthly-expenses-item.component.scss'],
})
export class MonthlyExpensesItemComponent implements OnInit {

    @Input() expense: Expense;

    constructor() {
    }

    ngOnInit() {
    }

}
