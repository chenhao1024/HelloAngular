import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  saved: boolean = true;
  jokeContent: string = '';
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(queryParams => {
      console.log(queryParams);
    });
    this.activeRoute.params.subscribe(
      params => {console.log(params); }
    );
  }

  writeJoke(value) {
    this.jokeContent = value;
    this.saved = false;
  }

  saveContent() {
    console.log(this.jokeContent);
    this.jokeContent = '';
    this.saved = true;
  }

}
