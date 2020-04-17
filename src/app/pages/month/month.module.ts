import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MonthPage} from './month.page';
import {MonthlySummaryComponent} from './monthly-summary/monthly-summary.component';
import {MonthlyExpensesComponent} from './monthly-expenses/monthly-expenses.component';
import {MonthlyExpensesItemComponent} from './monthly-expenses/monthly-expenses-item/monthly-expenses-item.component';
import {CreateExpenseComponent} from './create-expense/create-expense.component';
import {SharedModule} from '../../shared/shared.module';
import {EditExpenseComponent} from './edit-expense/edit-expense.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([{path: '', component: MonthPage}])
    ],
    declarations: [
        MonthPage,
        CreateExpenseComponent,
        EditExpenseComponent,
        MonthlySummaryComponent,
        MonthlyExpensesComponent,
        MonthlyExpensesItemComponent,
    ],
    entryComponents: [
        CreateExpenseComponent,
        EditExpenseComponent
    ]
})
export class MonthModule {
}
