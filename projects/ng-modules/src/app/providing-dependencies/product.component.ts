import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    template: `Product Component`,
    providers: [ProductService] // Service will be available when using this component
})

export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
