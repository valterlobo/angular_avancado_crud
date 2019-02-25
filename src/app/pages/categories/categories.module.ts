
import { NgModule } from "@angular/core";
import { SharedModule } from './../../shared/shared.module';
import { CategoriesRoutingModule } from "./categories-routing.module";

@NgModule({
  declarations: [CategoriesRoutingModule.components],
  imports: [
    SharedModule,
    CategoriesRoutingModule]
})
export class CategoriesModule {

}
