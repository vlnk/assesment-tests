import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    styleUrls: ['./app.component.scss'],
    imports: [
        HomeComponent
    ]
})

export class AppComponent {
    title = 'homes';
}
