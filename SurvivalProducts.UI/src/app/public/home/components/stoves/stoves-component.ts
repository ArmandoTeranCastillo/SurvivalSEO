import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public-service";

@Component({
    selector: 'app-stoves',
    templateUrl: './stoves-component.html',
    styleUrls: ["../products/products-component.scss"]
})
export class StovesComponent implements OnInit {
    
        products: any;
    
        constructor(private publicService: PublicService) { }
    
        ngOnInit() {
            this.getStoves();
        }
    
        getStoves(){
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