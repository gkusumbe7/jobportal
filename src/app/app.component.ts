import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ApplyformsComponent } from "./pages/applyforms/applyforms.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from "./pages/register/register.component";
import { MessagesComponent } from "./pages/messages/messages.component";
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NotificationsComponent } from "./pages/notifications/notifications.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    // RouterOutlet,
    IonicModule,
    // FooterComponent,
    NotificationsComponent
],
})
export class AppComponent {
  constructor() {}
}
