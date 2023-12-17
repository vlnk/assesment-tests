import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component'
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HousingLocationComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    housingLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);
    filteredLocationList: HousingLocation[] = [];

    constructor() {
        this.housingService.getAllHousingLocations().then(
            (housingLocationList: HousingLocation[]) => {
                this.housingLocationList = housingLocationList;
                this.filteredLocationList = housingLocationList;
            });
    }

    filterResults(text: string) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
        } else {
            this.filteredLocationList = this.housingLocationList.filter(
                housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
            );
        }
    }
}
