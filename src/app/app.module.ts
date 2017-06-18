import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EssayComponent } from './components/essay/essay.component';



@NgModule({
  declarations: [
    //Components
    AppComponent,
    EssayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,EssayComponent]
})
export class AppModule { }
