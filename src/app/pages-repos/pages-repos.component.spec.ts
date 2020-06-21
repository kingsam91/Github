import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesReposComponent } from './pages-repos.component';

describe('PagesReposComponent', () => {
  let component: PagesReposComponent;
  let fixture: ComponentFixture<PagesReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
