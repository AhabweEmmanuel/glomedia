import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sp-profile',
  templateUrl: './sp-profile.component.html',
  styleUrls: ['./sp-profile.component.css']
})
export class SpProfileComponent implements OnInit {
  id: string;
  profile: any = {};

  constructor(private route:ActivatedRoute, private dataService: DataService) { 
    // this.id$ = this.route.paramMap.pipe(paramMap => paramMap.get('id'))
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.profile = this.dataService.getServiceProvider(this.id) || {}
  }

}
