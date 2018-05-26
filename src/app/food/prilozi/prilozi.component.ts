import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-prilozi',
    templateUrl: './prilozi.component.html'
})

export class PriloziComponent{
    @Input() title = "Naslov priloga";
    @Input() items;
}