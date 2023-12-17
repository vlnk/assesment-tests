import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location'

@Injectable({
    providedIn: 'root'
})
export class HousingService {
    readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
    readonly apiUrl = 'http://localhost:3000/locations';

    constructor() { }

    async getAllHousingLocations(): Promise<HousingLocation[]> {
        const data = await fetch(this.apiUrl);
        return await data.json() ?? [];
    }

    async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
        const data = await fetch(`${this.apiUrl}/${id}`);
        return await data.json() ?? [];
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`)
    }
};
