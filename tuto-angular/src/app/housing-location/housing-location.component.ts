import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-housing-location',
    standalone: true,
    imports: [
        RouterLink,
        RouterOutlet
    ],
    templateUrl: './housing-location.component.html',
    styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation
}
