import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages-service/pages.service';
import { Page } from '../page';
import {RepoArray} from './user';

@Component({
  selector: 'app-pages-form',
  templateUrl: './pages-form.component.html',
  styleUrls: ['./pages-form.component.css']
})
export class PagesFormComponent implements OnInit {

  public samSon;

  values = '';
  isLoading:boolean = false;
  noInput:boolean = true;
  getFetchSuccess:boolean = false;
  NoUser:boolean = false;

  constructor(private pagesService: PagesService) { }

  onKey(event: any) { // without type info
    this.values = event.target.value;
    this.getFetchSuccess = false;
    this.NoUser = false;
    if (this.values == '') {
        this.noInput = true;
  	} else {
        this.noInput = false;
  	} 
  }
  
  ngOnInit(): void {
  }

  searchPages(userName: string): void {
    userName = this.values.trim();
    this.getFetchSuccess = true;

    console.log("YES: ", userName);
    this.pagesService.getUserRepo(userName).subscribe(
      // the first argument is a function which runs on success
      data => { this.samSon = data },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading sams', this.samSon)
    );
  } 
}
