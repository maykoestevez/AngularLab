import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(x => x.CustomerModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(x => x.ProductModule) }

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, 
      { preloadingStrategy: PreloadAllModules }// Preload all lazy module to improve the UX
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
