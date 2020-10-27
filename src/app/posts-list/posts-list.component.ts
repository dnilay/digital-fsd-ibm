import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostsServiceService} from '../services/posts-service.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
posts: Post[];
  constructor(private postService: PostsServiceService) {

  }

  ngOnInit(): void {

    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response;

      });
  }

}
