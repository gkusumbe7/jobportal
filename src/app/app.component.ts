import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { dashboardComponent } from "./pages/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [ dashboardComponent],
})
export class AppComponent {
  constructor() {}
}
