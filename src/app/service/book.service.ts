import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getAll()
  {
return this.http.get<any>("http://localhost:8093/gbook");
  }
  addBook(user:any)
  {
return this.http.get("http://localhost:8093/abook?id=" +user.id+ "&name=" +user.name+ "&author=" +user.author,{responseType:'text'} );
// it is added to get the console part 
// {responseType: 'text'}
}
  deleteBook(id:any)
  {
return this.http.get("http://localhost:8093/dbook/?id="+id ,{responseType: 'text'});
  }
}
