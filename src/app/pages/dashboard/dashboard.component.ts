import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [IonicModule, FormsModule, FooterComponent]
})

export class DashboardComponent  implements OnInit {

  
  // categories = [
  //   { icon: 'flash' },
  //   { icon: 'pencil' },
  //   { icon: 'copy' },
  //   { icon: 'phone-portrait' },
  //   { icon: 'code-slash' },
  //   { icon: 'server' },
  //   { icon: 'build' },
  //   { icon: 'ellipsis-horizontal' }
  // ];
  constructor() { }

  ngOnInit() {}

  
}
