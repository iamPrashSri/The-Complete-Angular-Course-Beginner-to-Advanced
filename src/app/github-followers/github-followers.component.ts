import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';  // Factory method to comnibe Observables
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {

    // Combine Observables
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(combined => {
        // Combined Array has paramMap and queryParamMap object from the respective observable
        return this.service.getAll();
      })
    )
    /* .subscribe(combined => { */
    .subscribe(followers => this.followers = followers
      /* // Combined Array has paramMap and queryParamMap object from the respective observable
      this.service.getAll()
      .subscribe(followers => this.followers = followers); */
    );

    /* this.route.paramMap.subscribe(params => {

    });

    // Accessing Query Params
    this.route.queryParamMap.subscribe(queryParams => {

    }); */
  }
}
