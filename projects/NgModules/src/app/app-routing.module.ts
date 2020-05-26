import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@Angular/router';
import { LazyLoadModule } from './lazy-loading/lazy-load.module';


const routes: Routes = [
    { path: 'lazy', loadChildren: () => import('./lazy-loading/lazy-load.module').then(x => x.LazyLoadModule) }
];

NgModule({
    imports: [RouterModule.forRoot(routes)]
});

export class AppRoutingModule { }