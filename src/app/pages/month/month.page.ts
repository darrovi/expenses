import {Component} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CreateExpenseComponent} from './create-expense/create-expense.component';

@Component({
    selector: 'app-month',
    templateUrl: 'month.page.html',
    styleUrls: ['month.page.scss']
})
export class MonthPage {

    constructor(public modalController: ModalController) {

    }

    onAdd() {
        this.modalController.create({
            component: CreateExpenseComponent
        }).then((modal) => modal.present());
    }
}
