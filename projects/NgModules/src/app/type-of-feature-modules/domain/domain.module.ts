import { NgModule } from '@angular/core';
import { DomainComponent } from './domain.component';
import { DomainRoutingModule } from './domain.routing.module';


/*
 Domain feature are modules that should export the components
 so another module import it.
 it just export a top component and then share the rest of the component from there.

 The difference between this feature module and routed one is that
  we access this one by importing the module and the routed is access with routing,
   you don't have to import the routed one.
 */

@NgModule({
  declarations: [DomainComponent],
  imports: [DomainRoutingModule],
  exports: [DomainComponent], // Export top component

  // Is not normal to have providers because you will
  // have services at root level, and if you will add providers leave it at this module life time.
  providers: []
})

export class DomainModule {

}
