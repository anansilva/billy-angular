import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav/nav-bar.component';
import { ExpensesListComponent } from './expenses/expenses-list.component';
import { ExpenseThumbnailComponent } from './expenses/expense-thumbnail.component';
import { ExpenseService } from './expenses/shared/expense.service';
import { EntryModalComponent } from './entry-modal/entry-modal.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExpensesListComponent,
    ExpenseThumbnailComponent,
    EntryModalComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent],
  entryComponents: [
    EntryModalComponent
  ]
})
export class AppModule { }
