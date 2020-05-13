import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutedComponent } from './routed.component';

const routes: Routes = [{ path: 'routed', component: RoutedComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class RoutedRoutingModule { }
