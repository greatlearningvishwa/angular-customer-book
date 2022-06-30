import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  get(){
return this.http.get<any>("http://localhost:8093/gcus" );
  }

  add(user:any){
return this.http.get("http://localhost:8093/acus?id="+user.id+"&name="+user.name +"&email="+user.email+"&mblno="+user.mblno ,{responseType: 'text'});
  }

  delete(id:any){
return this.http.get("http://localhost:8081/delete/?id="+id ,{responseType: 'text'});
  }
}
