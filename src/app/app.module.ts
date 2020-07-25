import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AuthHttp, AuthConfig } from 'angular-jwt';
import { HttpClientModule, HttpClient, HttpRequest } from '@angular/common/http';
import { 	HttpTestingController } from '@angular/common/http/testing';
import { APP_BASE_HREF } from '@angular/common';

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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from 'auth-guard.service';
import { fakeBackendProvider } from './helpers/fake-backend';

export function getAuthHttp(http: HttpClient) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  ReactiveFormsModule, 
                  HttpClientModule,
                  RouterModule.forRoot([
                    {path: '', component: HomeComponent},
                    {path: 'followers/:id/:username', component: GithubProfileComponent},
                    {path: 'followers', component: GithubFollowersComponent},
                    {path: 'posts', component: PostsComponent},
                    {path: '**', component: NotFoundComponent},
                    { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard] },
                    { path: 'login', component: LoginComponent},
                    { path: 'no-access', component: NoAccessComponent }
                  ])],
  providers: [PostService, 
              {provide: ErrorHandler, useClass: AppErrorHandler},
              {provide: APP_BASE_HREF, useValue: '*'},
              GithubFollowersService,
              
              OrderService,
              AuthService,
              AuthGuard,
              AdminAuthGuard,
              AuthHttp,
              {
                provide: AuthHttp,
                useFactory: getAuthHttp,
                deps: [HttpClient]
              },

              // For creating a mock back-end. You don't need these in a real app. 
              fakeBackendProvider,
              HttpTestingController,
              HttpRequest ],
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
                  GithubProfileComponent,
                  AdminComponent,
                  LoginComponent,
                  SignupComponent,
                  NoAccessComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
