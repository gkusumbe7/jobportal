import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports:[IonicModule , FormsModule] ,
})
export class RegisterComponent  implements OnInit {
  fullName = 'Henry Kanwil';
  email = 'henrykanwil@mail.com';
  password = '';
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  constructor() { }

  ngOnInit() {}

}
