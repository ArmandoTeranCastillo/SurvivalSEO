import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { HomeRoutingModule } from "./container/home-routing.module";
import { HomeComponent } from "./container/home.component";
import { ProductsComponent } from "./home/components/products/products-component";
import { PublicComponent } from "./public-component";
import { PublicRoutingModule } from "./public-routing.module";
import { PublicService } from "./public-service";


@NgModule({
    imports: [
        PublicRoutingModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        PublicComponent,
        HomeComponent,
        ProductsComponent,
    ],
    exports: [],
    providers: [
        PublicService
    ]
})

export class PublicModule {
    constructor() { }
}