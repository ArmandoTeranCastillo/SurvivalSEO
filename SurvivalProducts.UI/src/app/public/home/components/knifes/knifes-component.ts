import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public-service";


@Component({
    selector: "app-knifes",
    templateUrl: "./knifes-component.html",
    styleUrls: ["../products/products-component.scss"]
})
export class KnifesComponent implements OnInit {

    products: any;

    constructor(private publicService: PublicService) { }

    ngOnInit() {
        this.getKnifes();
    }

    getKnifes(){
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