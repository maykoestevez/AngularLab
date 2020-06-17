import { NgModule } from '@angular/core';
import { ProductService } from './product.service';



@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [ProductService], // define services that will be available just  when you import this module
})
export class DependenciesModule { }
