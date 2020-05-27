import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@Angular/router';
import { LazyLoadModule } from '../../../LazyLoading/src/app/lazy-loading/lazy-load.module';


const routes: Routes = [
    {}
];

NgModule({
    imports: [RouterModule.forRoot(routes)]
});

export class AppRoutingModule { }
