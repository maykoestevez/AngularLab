
/*
This module will implement for root to achieve singleton.

The problem is that when you have a module with poviders and you
import that module in multiple modules then you services will no longer be singleton
because you will have an instance of the serve on every import.

you can solve that by:
   Create your service with the injectable as root.
   Create a feature module of type services.
   Create you module with the forRoot implementation
*/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ForRootService } from './for-root.service';



@NgModule({
    imports: [],
    exports: [],


})
export class ForRootModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ForRootModule,
            providers: [ForRootService]
        };
    }
}
