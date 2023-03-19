import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public-service";


@Component({
    selector: 'app-backpacks',
    templateUrl: './backpacks-component.html',
    styleUrls: ["../products/products-component.scss"]
})
export class BackpacksComponent implements OnInit{
    products: any;
    
    constructor(private publicService: PublicService) { }

    ngOnInit() {
        this.getBackpacks();
    }

    getBackpacks(){
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