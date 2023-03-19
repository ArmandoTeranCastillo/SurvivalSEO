import { Component, OnInit } from "@angular/core";
import { PublicService } from "src/app/public/public-service";


@Component({
    selector: 'app-compass',
    templateUrl: './compass-component.html',
    styleUrls: ["../products/products-component.scss"]
})
export class CompassComponent implements OnInit {
    
        products: any;
    
        constructor(private publicService: PublicService) { }
    
        ngOnInit() {
            this.getCompass();
        }
    
        getCompass(){
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