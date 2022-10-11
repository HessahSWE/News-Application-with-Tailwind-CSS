import { AfterViewInit, Component, Injectable, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements AfterViewInit {
  title = 'News-Application-with-Tailwind-CSS';
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  constructor(private observer: BreakpointObserver) {
  
  }

  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observe(['(max-width :787px)']).subscribe((res) => {
      if (res.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
  }
}
