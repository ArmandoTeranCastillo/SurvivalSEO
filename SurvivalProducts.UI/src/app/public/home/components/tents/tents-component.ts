import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public-service";


@Component({
    selector: 'app-tents',
    templateUrl: './tents-component.html',
    styleUrls: ["../products/products-component.scss"]
})
export class TentsComponent implements OnInit {

    products: any;

    constructor(private publicService: PublicService) { }

    ngOnInit() {
        this.getTents();
    }

    getTents(){
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