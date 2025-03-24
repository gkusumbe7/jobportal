import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  imports:[IonicModule]
})
export class MessagesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
