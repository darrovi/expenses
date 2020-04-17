import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpenseFormComponent} from './components/expense-form/expense-form.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [ExpenseFormComponent],
    imports: [
        FormsModule,
        IonicModule,
        CommonModule
    ],
    exports: [ExpenseFormComponent],
})
export class SharedModule {
}
