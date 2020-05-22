import { Component, OnInit } from "@angular/core";
import {table_list} from "../models/models"
@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public tables : Array<any> = [];

    constructor() {
        this.tables = table_list;
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        console.log(this.tables);
        // Init your component properties here.
        console.log("Hey ya");
    }

    onSelectedIndexchanged(event){
        console.log(event);
    }
    ontap(data){
        console.log(data.id + " " + data.name);
        alert("table number is " + data.id + " and " + "customer name is " + data.name);
    }
}
