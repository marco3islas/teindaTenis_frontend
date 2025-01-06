import { Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  isSmallScreen = signal(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Handset
    ])
      .subscribe(result => {
        this.isSmallScreen.set(result.matches);
      });
  }
}
