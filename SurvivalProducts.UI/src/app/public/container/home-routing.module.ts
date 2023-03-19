import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "src/app/core/shared/components/not-found-component";
import { BackpacksComponent } from "../home/components/backpacks/backpack-component";
import { CompassComponent } from "../home/components/compass/compass-component";
import { FeaturesComponent } from "../home/components/features/features-component";
import { KnifesComponent } from "../home/components/knifes/knifes-component";
import { LightersComponent } from "../home/components/lighters/lighters-component";
import { ProductsComponent } from "../home/components/products/products-component";
import { SleepingBacksComponent } from "../home/components/sleepingbags/sleepingbags-component";
import { StovesComponent } from "../home/components/stoves/stoves-component";
import { TentsComponent } from "../home/components/tents/tents-component";
import { HomeComponent } from "./home.component";


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
           
            {path: 'products', component: ProductsComponent},
            {path: 'features', component: FeaturesComponent},
            {path: 'knifes', component: KnifesComponent},
            {path: 'compasses', component: CompassComponent},
            {path: 'tents', component: TentsComponent},
            {path: 'stoves', component: StovesComponent},
            {path: 'backpacks', component: BackpacksComponent},
            {path: 'lighters', component: LightersComponent},
            {path: 'sleepingbags', component: SleepingBacksComponent},
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule {}