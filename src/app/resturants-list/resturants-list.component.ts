import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-resturants-list',
  templateUrl: './resturants-list.component.html',
  styleUrls: ['./resturants-list.component.css']
})
export class ResturantsListComponent implements OnInit {
  //proprty
  restName ="List of Restuarants"
  resturantList:any=[]
  //to hold searchterm
  searchTerm=""
//dependancy injection
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    //apiservice call - to get all resturant list
    this.apiService.getResturantsList()
    .subscribe((result)=>{
      console.log(result);
      this.resturantList = result
      console.log(this.resturantList);     

    })
  //to get search term from api sevice
  this.apiService.search.subscribe((data)=>{
    console.log(data);
    this.searchTerm=data
  })
      
  }

}
