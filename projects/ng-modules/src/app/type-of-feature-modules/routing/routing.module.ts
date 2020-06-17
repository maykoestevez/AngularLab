import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []; // routes definitions

@NgModule({

    // For child does not expose router service
    // intead the app use the use that was injected in the app.module
    imports: [RouterModule.forChild(routes)] // Adding router configuration
})

export class RoutingModule { }