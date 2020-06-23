import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages-service/pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public samSon;
  public nguThi;

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    this.getGitacc();
    this.getPublicrepos();
  }

  search(): void {
    alert('working');
  }

  // onClickMe() {
  //   this.clickMessage = 'You are my hero!';
  // }

  display(sam) {
    console.log("YES: ", sam)
  }

  getGitacc() {
    this.pagesService.getGitacc().subscribe(
      // the first argument is a function which runs on success
      data => { this.samSon = data },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading sams', this.samSon)
    );
  }
  getPublicrepos() {
    this.pagesService.getPublicrepos().subscribe(
      // the first argument is a function which runs on success
      data => { this.nguThi = data },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log(this.nguThi)
    );
  }


}
