import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './not-found-page';
import { CanActiveService } from './guards/can-active.service';
import { CanLoadService } from './guards/can-load.service';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { CanActiveChild } from './guards/can-active-child.service';
import { ResolveService } from './guards/resolve.service';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(x => x.CustomerModule) },
  { path: 'product',  loadChildren: () => import('./product/product.module').then(x => x.ProductModule) },

  // Show this page is the path does not match any of the previous routes
  {
    path: '**', component: PageNotFoundComponent, // Wildcard 404 page

    // Guards
    canActivate: [CanActiveService],
    canLoad: [CanLoadService],
    canDeactivate: [CanDeactivate],
    canActivateChild: [CanActiveChild],
    resolve: [ResolveService]
  }

];

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent
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
