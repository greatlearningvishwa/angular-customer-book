import { Component } from '@angular/core';
import { BookService } from './service/book.service';
import { CustomerService } from './service/customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstack';
  books:any
  customer:any;
  constructor(private service:BookService,private customerservice:CustomerService){}
  ngOnInit():void{
    this.load();
   this.custo();
    
   
  }
  
  load():void{
    this.service.getAll().subscribe(response=>{
      this.books=response;
      console.log(this.books);

    })
  
  }
 
  custo():void{
    this.customerservice.get().subscribe(response=>{
      this.customer=response;
    })
  }
  addId=0;
  addName="";
  addAuthor="";

  addbook(){ var newbook={
    "id":this.addId,
  "name":this.addName,
  "author":this.addAuthor
  };
  this.service.addBook(newbook).subscribe(response =>{
    
    console.log(response);
  })
  this.addId=0;
  this.addAuthor="";
  this.addName="";

  }
  deleteId=0;
  deletebook(){
    
    this.service.deleteBook(this.deleteId).subscribe(response=>{
      console.log(response)
    })

  }
  
}
