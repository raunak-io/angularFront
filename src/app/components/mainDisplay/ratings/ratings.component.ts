import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent implements OnInit {
  constructor() {}
  liked = false;

  ngOnInit(): void {}
}
