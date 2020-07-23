import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewcourseFormComponent } from './newcourse-form/newcourse-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubFollowersService } from './services/github-followers.service';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule, 
                  HttpClientModule,
                  RouterModule.forRoot([
                    {path: '', component: HomeComponent},
                    {path: 'followers/:username', component: GithubProfileComponent},
                    {path: 'followers', component: GithubFollowersComponent},
                    {path: 'posts', component: PostsComponent},
                    {path: '**', component: NotFoundComponent}
                  ])],
  providers: [PostService, 
              {provide: ErrorHandler, useClass: AppErrorHandler},
              {provide: APP_BASE_HREF, useValue: '/'},
              GithubFollowersService],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  ContactFormComponent, 
                  SignupFormComponent, 
                  NewcourseFormComponent, 
                  PostsComponent,
                  GithubFollowersComponent,
                  HomeComponent,
                  NavbarComponent,
                  NotFoundComponent,
                  GithubProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
