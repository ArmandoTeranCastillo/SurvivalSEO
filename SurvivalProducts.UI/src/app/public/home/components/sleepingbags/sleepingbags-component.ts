import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public-service";


@Component({
    selector: 'app-sleeping-bags',
    templateUrl: './sleepingbags-component.html',
    styleUrls: ["../products/products-component.scss"]
})
export class SleepingBacksComponent implements OnInit {
    products: any;

    constructor(private publicService: PublicService) { }

    ngOnInit() {
        this.getSleepingBags();
    }

    getSleepingBags() {
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