import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@Angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    { path: '', component: MainComponent }
];

NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
});

export class LazyLoadRoutingModule { }
