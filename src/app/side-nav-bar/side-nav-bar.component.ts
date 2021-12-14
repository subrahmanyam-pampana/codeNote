import { Component, Input, OnInit } from '@angular/core';
import {SearchService} from '../services/search/search.service'
import {CodesDataService} from '../services/codeData/codes-data.service'

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
@Input() tag!:any;
active:boolean= false;
hoverActive:boolean = false;
  constructor(private searchService: SearchService,
    private dataService: CodesDataService) { }

  ngOnInit(): void {
  }

  filterSnips(){ 
    if(this.active){
     this.searchService.resetFilter();
    }else{
      this.searchService.filterTag(this.tag);
    }
    this.active = !this.active
  }

  deleteTag(){
    this.dataService.deleteTag(this.tag)
  }
}
