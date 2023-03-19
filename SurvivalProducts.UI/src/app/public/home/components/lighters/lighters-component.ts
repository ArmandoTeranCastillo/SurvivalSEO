import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public-service";


@Component({
    selector: 'app-lighters',
    templateUrl: './lighters-component.html',
    styleUrls: ["../products/products-component.scss"]
})
export class LightersComponent implements OnInit{
    products: any;
    
    constructor(private publicService: PublicService) { }

    ngOnInit() {
        this.getLighters();
    }

    getLighters(){
        this.publicService.getProducts().subscribe(
            (data) => {
                this.products = data;
                console.log(this.products);
            },
            (error) => {
                console.log(error);
            }
        )
    }
}