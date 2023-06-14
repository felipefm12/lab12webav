import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
  showPostDetails(postId: number): void {
    // Implementa la lógica para mostrar los detalles del post
  }
}

