import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comments } from 'src/app/classes/Comments';
import { CommentList } from 'src/app/classes/commentList';
import { commentListwid } from 'src/app/classes/commentListwid';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  url="http://5cb4a97d.ngrok.io/api/";
   /**array to save the data from the requests */
  posts: any =[];
/** constructor used to make object of http to use post requests */
  constructor(private http: HttpClient) { }
/** post a new comment */
  addComment(newComment: Comments): Observable<Comments> {
    return this.http.post<Comments>(this.url +'makeComment?id='+ newComment.resourse_id + '&body=' + newComment.comment_body, newComment)
  }

/** comments on a specific object and subscribe to the given data */
  commentOnobject( resourse_id: number, comment_body: string
    ): void {
    const newComment: Comments = { resourse_id, comment_body } as Comments;
    console.log(newComment);
    this.addComment(newComment)
      .subscribe(data => {this.posts.push(data),
        console.log(data);
      },
      (err: any) => console.log(err));
  }
/** get comments */
  getCommentsList(id : number): Observable<commentListwid[]> {
    return this.http.get<commentListwid[]>(this.url+'listComments?id='+ id);
  }
  /** get comments */
  testgetCommentsList(id : number): Observable<CommentList[]> {
    return this.http.get<CommentList[]>(this.url+'listComments?id='+ id)
  }
/** delete comment */
deleteComment(id: number):Observable<Comments>{
return this.http.delete<Comments>(this.url+'deleteComment?id='+ id);
}


}
