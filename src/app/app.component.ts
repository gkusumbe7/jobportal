import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ApplyformsComponent } from "./pages/applyforms/applyforms.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [ApplyformsComponent],
})
export class AppComponent {
  constructor() {}
}
