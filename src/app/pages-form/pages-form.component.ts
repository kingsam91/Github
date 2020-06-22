import { Component, OnInit } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-pages-form',
  templateUrl: './pages-form.component.html',
  styleUrls: ['./pages-form.component.css']
})
export class PagesFormComponent implements OnInit {

  search = new Page('');
  constructor() { }

  ngOnInit(): void {
  }

  searchPages(value: string) {
    console.log("YES: ", value)
  }

}
