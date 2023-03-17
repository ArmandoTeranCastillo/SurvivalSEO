import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public-service";


@Component({
    selector: 'app-products',
    templateUrl: './products-component.html',
    styleUrls: ['./products-component.scss']
})

export class ProductsComponent  implements OnInit{

    products: any;

    constructor(private publicService: PublicService) { }

    ngOnInit() {
        this.getProducts();
     }

     getProducts() {
        this.publicService.getProducts().subscribe(
            (data) => {
                this.products = data;
            },
            (error) => {
                console.log(error);
            }
        )
 }
}