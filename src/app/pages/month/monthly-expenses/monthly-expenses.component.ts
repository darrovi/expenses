import { Component, OnInit } from '@angular/core';
import {ExpensesService} from '../../../services/expenses.service';

@Component({
  selector: 'app-monthly-expenses',
  templateUrl: './monthly-expenses.component.html',
  styleUrls: ['./monthly-expenses.component.scss'],
})
export class MonthlyExpensesComponent implements OnInit {

  constructor(public expensesService: ExpensesService) { }

  ngOnInit() {}

}
