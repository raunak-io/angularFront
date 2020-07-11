import { AuthService } from './services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FreakyLabzz.com';

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoAuthUser();

    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onLogOut() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
