import { Component, Input, OnInit } from '@angular/core';
import { Comments } from '../models/Comment';

@Component({
  selector: 'app-topComment',
  templateUrl: './topComment.component.html',
  styleUrls: ['./topComment.component.scss']
})
export class TopCommentComponent implements OnInit {

  @Input() commentArray :any
  constructor() { }

  ngOnInit() {
    console.log(this.commentArray,"hello")
  }

}
