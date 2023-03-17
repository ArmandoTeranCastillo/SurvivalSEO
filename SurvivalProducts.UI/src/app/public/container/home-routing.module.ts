import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "src/app/core/shared/components/not-found-component";
import { ProductsComponent } from "../home/components/products/products-component";
import { HomeComponent } from "./home.component";


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
           
            {path: 'products', component: ProductsComponent},
            {path: '**', component: NotFoundComponent}
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomeRoutingModule {}