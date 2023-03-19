import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PublicService } from "src/app/public/public-service";


@Component({
    selector: 'app-products',
    templateUrl: './products-component.html',
    styleUrls: ['./products-component.scss']
})

export class ProductsComponent  implements OnInit{

    products: any;

    constructor(private publicService: PublicService, private router: Router) { }

    ngOnInit() {
        this.getProducts();
     }

   
      
     getProducts() {
        this.publicService.getProducts().subscribe(
            (data) => {
                this.products = data;
            },
            (error) => {
                notify(error, "error", 3000);
            }
        )
 }
}

function notify(error: any, arg1: string, arg2: number) {
    throw new Error("Function not implemented.");
}
