import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { HomeRoutingModule } from "./container/home-routing.module";
import { HomeComponent } from "./container/home.component";
import { BackpacksComponent } from "./home/components/backpacks/backpack-component";
import { CompassComponent } from "./home/components/compass/compass-component";
import { FeaturesComponent } from "./home/components/features/features-component";
import { KnifesComponent } from "./home/components/knifes/knifes-component";
import { LightersComponent } from "./home/components/lighters/lighters-component";
import { ProductsComponent } from "./home/components/products/products-component";
import { SleepingBacksComponent } from "./home/components/sleepingbags/sleepingbags-component";
import { StovesComponent } from "./home/components/stoves/stoves-component";
import { TentsComponent } from "./home/components/tents/tents-component";
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
        FeaturesComponent,
        KnifesComponent,
        CompassComponent,
        TentsComponent,
        StovesComponent,
        BackpacksComponent,
        LightersComponent,
        SleepingBacksComponent
    ],
    exports: [],
    providers: [
        PublicService
    ]
})

export class PublicModule {
    constructor() { }
}