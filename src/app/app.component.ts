import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'News-Application-with-Tailwind-CSS';
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  constructor(private observer: BreakPointObserver) {
  }
  ngAfterViewInit(): void {
    this.sideNav.opened = true;
    this.observer.observer(['(max-width :787px)']).subscribe((res) => {
      if (res?.matches) {
        this.sideNav.mode = 'over';
        this.sideNav.close();
      } else {
        this.sideNav.mode = 'side';
        this.sideNav.open();
      }
    });
  }
}
