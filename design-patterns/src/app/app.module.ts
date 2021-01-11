import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { UserService } from './services/user.service';
import { RenderDomDirective } from './Directive/render-dom.directive';
@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, FeedComponent, RenderDomDirective,],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: UserService,
      useClass: UserService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
