import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages-service/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public samSon;

  constructor(private pagesService:PagesService) { }

  ngOnInit(): void {
    this.getGitacc();
  }

  getGitacc() {
    this.pagesService.getGitacc().subscribe(
      // the first argument is a function which runs on success
      data => { this.samSon = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading sams', this.samSon)
    );
  }

}
