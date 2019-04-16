import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav/nav-bar.component';
import { ExpensesListComponent } from './expenses/expenses-list.component';
import { ExpenseThumbnailComponent } from './expenses/expense-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExpensesListComponent,
    ExpenseThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
