import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sp-list',
  templateUrl: './sp-list.component.html',
  styleUrls: ['./sp-list.component.css']
})
export class SpListComponent implements OnInit {

  searchText: string;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.serviceProviders
  }

  onSearch(){
    let results = this.dataService.searchServiceProvider(this.searchText)
    console.log('search results',results)
  }

}
