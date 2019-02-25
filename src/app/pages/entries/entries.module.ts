import { NgModule } from '@angular/core';
import { EntriesRoutingModule } from './entries-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [EntriesRoutingModule.components],
  imports: [
    SharedModule,
    EntriesRoutingModule,


  ]
})
export class EntriesModule { }
