import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckPunctuationComponent } from './check-punctuation/check-punctuation.component';
import { CheckPunctuationFormComponent } from './check_punctuation/check-punctuation-form/check-punctuation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckPunctuationComponent,
    CheckPunctuationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
