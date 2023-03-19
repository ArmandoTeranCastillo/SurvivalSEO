import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public-service";


@Component({
    selector: "app-features",
    templateUrl: "./features-component.html",
    styleUrls: ["../products/products-component.scss"]
})
export class FeaturesComponent implements OnInit {

    products: any;

    constructor(private publicService: PublicService) { }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.publicService.getProducts().subscribe((data) => {
            this.products = data;
        },
            (error) => {   
                notify(error, "error", 3000);
            });
    }

}
function notify(error: any, arg1: string, arg2: number) {
    throw new Error("Function not implemented.");
}

