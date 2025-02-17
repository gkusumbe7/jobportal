import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports:[IonicModule]
})
export class dashboardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
