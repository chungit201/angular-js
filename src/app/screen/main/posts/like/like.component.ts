import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent implements OnInit {
  constructor() {}
  public activeLike: boolean = false;
  ngOnInit(): void {}
  public hearted(): void {
    this.activeLike = !this.activeLike;
  }
}
