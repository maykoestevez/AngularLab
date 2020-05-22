import { Injectable } from '@angular/core';

/*
Here we specified that the service will be singletone
By telling the injectable that provide the service in the root injectable

Other way we can make a service singleton is by adding it to the app.module.ts providers
*/
@Injectable({ providedIn: 'root' })
export class ServiceNameService {
    constructor() { }

}
