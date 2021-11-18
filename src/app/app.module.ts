import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainDocumentsComponent } from './main-documents/main-documents.component';
import { ActiveFormComponent } from './active-form/active-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainDocumentsComponent,
    ActiveFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
