import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.scss'],
  imports:[IonicModule]
})
export class JobdetailsComponent  implements OnInit {

  job: any = {};

  constructor(private route: ActivatedRoute) {
    this.loadJobDetails();
  }

  loadJobDetails() {
    this.job = {
      company: 'Highspeed Studios',
      title: 'Senior Software Engineer',
      salary: '$500 - $1,000/monthly',
      location: 'Medan, Indonesia',
      logo: 'assets/highspeed.png',
      tags: ['Fulltime', 'Remote Working', 'Hourly'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      requirements: [
        'Sed ut perspiciatis unde omnis',
        'Doloremque laudantium',
        'Ipsa quae ab illo inventore',
        'Architecto beatae vitae dicta',
        'Sunt explicabo'
      ]
    };
  }

  ngOnInit() {}

}
