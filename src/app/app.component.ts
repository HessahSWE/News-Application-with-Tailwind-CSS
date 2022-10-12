import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ServiceService } from './service/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {
  title = 'News-Application-with-Tailwind-CSS';
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  sources: any = [];
  articles: any = [];
  selectedNewsChannel: string = 'Top 10 Trending News!';
  constructor(private observer: BreakpointObserver, private cdr: ChangeDetectorRef, private newsApi: ServiceService) {
  }
  ngOnInit(): void {
    this.newsApi.initArticles().subscribe((res: any) => {
      console.log(res);
      this.articles = res.articles;
    });
    this.newsApi.initSources().subscribe((res: any) => {
      console.log(res);
      this.sources = res.sources;
    });
  }

  // ngAfterViewInit(): void {
  //   this.sideNav.opened = true;
  //   this.observer.observe(['(max-width :787px)']).subscribe((res) => {
  //     if (res?.matches) {
  //       this.sideNav.mode = 'over';
  //       this.sideNav.close();
  //     } else {
  //       this.sideNav.mode = 'side';
  //       this.sideNav.close();
  //     }
  //   });
  //   this.cdr.detectChanges();
  // }
  searchSource(source: any) {
    this.sideNav.close();
    this.newsApi.getArticlesById(source.id).subscribe((res: any) => {
      this.articles = res.articles;
      this.selectedNewsChannel = source.name;
    });
  }
}
