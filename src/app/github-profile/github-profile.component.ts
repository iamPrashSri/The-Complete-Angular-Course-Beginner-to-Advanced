import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(routeParams => {
      let id = +routeParams.get('username');
      console.log(id);
      console.log(routeParams);
    });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    });
  }
}
