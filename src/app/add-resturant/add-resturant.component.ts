import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {
  id:any;
  neighborhood:any;
      photograph:any;
      Monday:any;
      Tuesday:any;
      Wednesday:any;
      Thursday:any;
      Friday:any;
      Saturday:any;
      Sunday:any;
      rName:any;
      address:any;
      cusine_type:any;
      rvname:any;
      date:any;
      rating:any;
      comments:any;
      lat:any;
      lng:any;
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    let newRestuarant = {
      id:this.id,
      name:this.rName,
      neighborhood:this.neighborhood,
      photograph:this.photograph,
      address:this.address,
      latlng:{
        lat:this.lat,
        lng:this.lng
      },
      cusine_type:this.cusine_type,
      operating_hours: {
      Monday:this.Monday,
      Tuesday:this.Tuesday,
      Wednesday:this.Wednesday,
      Thursday:this.Thursday,
      Friday:this.Friday,
      Saturday:this.Saturday,
      Sunday:this.Saturday
    },
    reviews: [
      {
      name:this.rvname,
      date:this.date,
      rating:this.rating,
      comments:this.comments
      }
    ]
    }
    console.log(newRestuarant);
    this.api.addRestuarant(newRestuarant)
    .subscribe(()=>{
       alert('Restaurnt details successfully added')
       this.router.navigateByUrl('')
    })
    
    
  }
 

}
