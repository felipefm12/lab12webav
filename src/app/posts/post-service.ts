import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = [
    { id: 1, title: 'Publicación 1', content: 'Contenido de la publicación 1' },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2' },
    { id: 3, title: 'Publicación 3', content: 'Contenido de la publicación 3' }
  ];

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }
}
