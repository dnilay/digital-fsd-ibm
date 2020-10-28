import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TotorialsListComponent } from './components/totorials-list/totorials-list.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TotorialsListComponent,
    TutorialsListComponent,
    TutorialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
