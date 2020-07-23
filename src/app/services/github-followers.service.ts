import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) {
    super(http, 'https://api.github.com/users/mosh-hamedani/followers');
  }
}
