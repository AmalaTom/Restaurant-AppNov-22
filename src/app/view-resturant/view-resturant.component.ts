import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-resturant',
  templateUrl: './view-resturant.component.html',
  styleUrls: ['./view-resturant.component.css']
})
export class ViewResturantComponent implements OnInit {
 restId:any;
 restDetails:any;
 lDate:any;
  constructor(private activatedRoute:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result=>{

      //console.log(result['id']);
      //console.log(result.id);
     this.restId = result['id']
      
    })
    this.apiService.viewRestuarant(this.restId)
    .subscribe((result:any)=>{
      //console.log(result);
      this.restDetails = result
      
    })
  }

}
