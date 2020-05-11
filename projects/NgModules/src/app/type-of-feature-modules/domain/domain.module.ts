import { NgModule } from '@angular/core';
import { DomainComponent } from './domain.component';

/*
 Domain feature module should not have routing,
 it just export a top component and then share the rest of the component from there.
 */

@NgModule({
    declarations: [DomainComponent],
    imports: [],
    exports: [DomainComponent], // Export top component

    // Is not normal to have providers because you will
    // have services at root level, and if you will add providers leave it at this module life time.
    providers: []
})

export class DomainModule {

}
