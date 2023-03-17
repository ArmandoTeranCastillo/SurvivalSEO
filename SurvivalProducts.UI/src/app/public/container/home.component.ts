import { Component, OnInit } from "@angular/core";
import { PublicService } from "../public-service";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private publicService: PublicService) { }

    ngOnInit() {
        
     }

    
}