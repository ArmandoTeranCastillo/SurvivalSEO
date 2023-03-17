import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/not-found-component";
import { MatCardModule } from "@angular/material/card";
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from "@angular/common";




@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
        
    ],
    declarations: [
        NotFoundComponent
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatGridListModule,
    ],
    providers: []
})

export class SharedModule {
    constructor() { }
}