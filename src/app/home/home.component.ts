import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(ProfileComponent,{static:true}) profilec:ProfileComponent;
  @ViewChild(FeedComponent) feed:FeedComponent;

  feedHeading = 'Welcome to Feed Page'
  constructor(private user:UserService) { }

  ngOnInit(): void {
    let userdata = this.user.getUsers()
    console.log(userdata);
  }

  refreshpage() {
    console.log('home referesh');
    this.profilec.refresh()
  }
}
