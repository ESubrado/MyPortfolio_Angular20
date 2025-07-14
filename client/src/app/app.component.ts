import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'Angular CRUD example';

  constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.ripple.set(true);
    }
}
