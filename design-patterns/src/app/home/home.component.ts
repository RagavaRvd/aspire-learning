import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AppConfig, APP_CONFIG, configServices } from '../app.config';
import { FeedComponent } from '../feed/feed.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: UserService,
      useFactory: configServices,
      deps: [APP_CONFIG],
      multi: true,
    },
  ],
})
export class HomeComponent implements OnInit {
  @ViewChild(ProfileComponent, { static: true }) profile: ProfileComponent;
  @ViewChild(FeedComponent) feed: FeedComponent;
  sampleJSON = {
    image: '',
    heading: 'Sample Custome Directive',
    desc: 'this is the sample description from the directives.'
  }
  feedHeading = 'Welcome to Feed Page';
  constructor(
    private user: UserService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    console.log('loger->constructor->config', config);
  }

  ngOnInit(): void {
    console.log(this.user);

    let userData = this.user.get();
    console.log(userData);
  }

  refreshpage() {
    console.log('home referesh');
    this.profile.refresh();
  }
}
