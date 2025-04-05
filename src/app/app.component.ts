import { Component } from '@angular/core';
import { LoginComponent } from "./pages/login/login.component";
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [RouterOutlet,
    IonicModule
    // DashboardComponent
    , FooterComponent],
})
export class AppComponent {
  constructor() {}
}
