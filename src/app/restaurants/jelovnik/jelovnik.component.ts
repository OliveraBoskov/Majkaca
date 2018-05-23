import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-jelovnik',
    templateUrl: './jelovnik.component.html'

})

export class JelovnikComponent{
    @Input() title = "Naslov jelovnika";
    @Input() items;
}