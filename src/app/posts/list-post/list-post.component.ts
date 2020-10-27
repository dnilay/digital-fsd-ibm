import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {Subscription} from 'rxjs';
import {Post} from '../post.model';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

}
