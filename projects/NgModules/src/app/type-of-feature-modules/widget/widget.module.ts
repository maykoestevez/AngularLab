import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { WidgetPipe } from './widget.pipe';

@NgModule({

    declarations: [WidgetComponent, WidgetPipe],
    exports: [WidgetComponent, WidgetPipe]
})

export class WidgetModule { }
