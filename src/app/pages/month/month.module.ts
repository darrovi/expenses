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

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: MonthPage}])
    ],
    declarations: [
        MonthPage,
        CreateExpenseComponent,
        MonthlySummaryComponent,
        MonthlyExpensesComponent,
        MonthlyExpensesItemComponent
    ],
    entryComponents: [
        CreateExpenseComponent
    ]
})
export class MonthModule {
}
