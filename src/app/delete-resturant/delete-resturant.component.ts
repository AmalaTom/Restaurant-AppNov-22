import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-resturant',
  templateUrl: './delete-resturant.component.html',
  styleUrls: ['./delete-resturant.component.css']
})
export class DeleteResturantComponent implements OnInit {
  restId:any;
  constructor(private activatedRoute:ActivatedRoute,private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result)=>{
      //console.log(result['id']);
      //console.log(result.id);
     this.restId = result['id']
      
    })
      this.apiService.deleteRestuarant(this.restId)
     .subscribe(()=>{
      alert('Restuarant Details  Deleted Successfully')
      this.router.navigateByUrl('')
      })
  }

}
