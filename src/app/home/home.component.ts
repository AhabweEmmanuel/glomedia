import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serviceList: any = [
    [
      { title: 'Videography', content: 'Creating a polished, professional-looking video doesn’t have to mean spending on unnecessary equipment and filmmaking workshops. We got you covered.', iconClass:'fa-video' },
      { title: 'Photography', content: 'The purpose of photography can vary depending on what the photographer is trying to achieve. We got you covered on this.', iconClass:'fa-photo-video' },
      { title: 'Web Design', content: 'Web design encompasses many different skills and disciplines in the production and maintenance of websites. We have already digested it for you.', iconClass:'fa-laptop' }
    ],
    [
      { title: 'Projection', content: 'Outdoor projection, indoor string lights, laser projectors, spotlights, .... everything...', iconClass:'fa-project-diagram' },
      { title: 'Publicity', content: 'Are you famous, or do you want to be? Meet the best professionals on the market...', iconClass:'fa-passport'},
      { title: 'Animation', content: '2D animation, 3D, traditional, explainer videos...meet our professionals.', iconClass:'fa-radiation-alt' }
    ],
    [
      { title: 'Graphic Design', content: 'From packaging to motion graphics, the graphic design industry is huge. we help you Seek the right design services for your business, ...', iconClass:'fa-dyalog' },
      { title: 'Filming', content: 'Meet professional film and creative directors for you next movie project.', iconClass:'fa-film' },
      { title: 'Digital Marketing', content: 'Digital marketing is the component of marketing that utilizes internet and online based digital technologies', iconClass:'fa-shopping-cart' }
    ],
    [
      { title: 'Stage Management', content: 'Stage management requires a general understanding of all aspects of production and offers organisational support to ensure the process runs smoothly and efficiently.', iconClass:'fa-lock' },
      { title: 'Applications', content: 'We look at the characteristics that define applications, from stand-alone software to full-blown suites, all covered...', iconClass:'fa-laptop' },
      { title: 'And much more...', content: 'Connecting you to your end product. We make you live....', iconClass:'fa-angle-double-right' }
    ]
  ]

  constructor(public dataService: DataService) { 
    // this.dataService.serviceProviders
  }

  ngOnInit(): void {
  }

  

}
