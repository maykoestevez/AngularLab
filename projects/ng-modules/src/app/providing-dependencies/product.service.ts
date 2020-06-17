import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' }) // Make it available in all parts of the app
@Injectable()
export class ProductService {

    constructor() { }

    getName(): string {
        return 'Name';
    }
}
