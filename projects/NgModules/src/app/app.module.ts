// When you want to run your app in the browser
// this module also import commonModule that brings ngif,ngFor and others basic directives
import { BrowserModule } from '@angular/platform-browser';

// Allow to use ngModel and template driven form
import { FormsModule } from '@angular/forms';

// Allow you to work with reactive form
import { HttpClientModule } from '@angular/common/http';

// Allow you to use RouterLink, forRoot, foChild
import { RouterModule } from '@angular/router/router';


// Allow to import NgModule
import { NgModule } from '@angular/core';

// Entry component
import { AppComponent } from './app.component';


@NgModule({

  // To use components directives and pipe
  declarations: [
    AppComponent
  ],

  // Place to import external module
  imports: [
    BrowserModule,
    FormsModule
  ],

  // To inject services
  providers: [],

  // To export module so they can be use in other modules
  exports: [],

  // Allow to to define an entry component to start the app
  bootstrap: [AppComponent]
})
export class AppModule { }
