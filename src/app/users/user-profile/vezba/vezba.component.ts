import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-vezba',
    templateUrl: './vezba.component.html'
})
export class VezbaComponent {
    //uglaste zagrade U PARENTOVOM HTML-u moraju imati naziv kao sto su kod inputa
    @Input() Title = "Naslov"
    @Input() drugiTekst = "drugi Naslov"
    @Input() tekstDugmeta = "Ja sam dugme"


}