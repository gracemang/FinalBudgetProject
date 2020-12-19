import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'appCreateNewBudget',
  templateUrl: './appCreateNewBudget.component.html',
  styleUrls: ['./appCreateNewBudget.component.scss']
})
export class CreateNewBudgetComponent implements OnInit {
  itemsArray: FormArray;
  budgetForm: FormGroup;
  budgetId: any;
  budgetJson: JSON;
  authService: any;
  constructor(private fb: FormBuilder) {
    this.budgetForm = this.fb.group({
      budgets: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getBudgetsForUser();

  }

  getBudgetsForUser() {

    let userId = sessionStorage.getItem('id').replace('"', '').replace('"', '');

    this.budgets().clear();
    this.authService
      .getBudgetIdFromDataBase({ userId: userId })
      .subscribe(
        (data) => {
          this.budgetId = data.budgetId;
          if (this.budgetId != null) {
            this.authService
              .getBudgetsFromDataBase(this.budgetId)
              .subscribe(
                (data) => {
                  data.budgets.forEach((element) => {
                    let budget = this.newBudget();
                    budget.setValue({
                      expenseName: element.expenseName,
                      budgetValue: element.budgetValue,
                      expenseValue: element.expenseValue,
                    });
                    this.budgets().push(budget);
                  });
                },
                (error) => {
                  return;
                }
              );
          }
        },
        (error) => {
          return;
        }
      );
  }

  budgets(): FormArray {
    return this.budgetForm.get('budgets') as FormArray;
  }

  newBudget(): FormGroup {
    return this.fb.group({
      expenseName: '',
      budgetValue: '',
      expenseValue: '',
    });
  }

  addBudget() {
    this.budgets().push(this.newBudget());
  }

  removeBudget(index: number) {
    this.budgets().removeAt(index);
  }

  onSubmit() {
    this.budgetJson = this.budgetForm.value.budgets;

    var element;
    for (element in this.budgetJson) {
      this.budgetJson[element].budgetId = this.budgetId;
    }


  }
}
