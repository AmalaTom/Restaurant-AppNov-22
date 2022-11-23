import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-resturant',
  templateUrl: './update-resturant.component.html',
  styleUrls: ['./update-resturant.component.css']
})
export class UpdateResturantComponent implements OnInit {
restId:any;
restDetails:any={}
  constructor(private activatedRoute:ActivatedRoute,private apiSevice:ApiService,private router:Router) { }

  ngOnInit(): void {
    //1.get restuarant id to be updated
    this.activatedRoute.params.subscribe((result:any)=>{
      this.restId = result['id']
    //  console.log(this.restId);
      
      })
      //2.We have to featch the details of restuarant id as ....(any id)
      this.apiSevice.viewRestuarant(this.restId)
      .subscribe((result)=>{
        this.restDetails = result
       // console.log(this.restDetails);
        
      })
  }
  updateRestuarant(form:any){
   // console.log(form.value);  
  let updateRestDetails ={
    id:form.value.id,
    name:form.value.rName,
    neighborhood:form.value.neighborhood,
    photograph:form.value.photograph,
    address:form.value.address,
    latlng:{
      lat:form.value.lat,
      lng:form.value.lng
    },
    cuisine_type:form.value.cuisine_type,
    operating_hours: {
    Monday:form.value.Monday,
    Tuesday:form.value.Tuesday,
    Wednesday:form.value.Wednesday,
    Thursday:form.value.Thursday,
    Friday:form.value.Friday,
    Saturday:form.value.Saturday,
    Sunday:form.value.Saturday
  },
  reviews: [
    {
    name:form.value.rvname,
    date:form.value.date,
    rating:form.value.rating,
    comments:form.value.comments
    }
  ]
  }
 //console.log(updateRestDetails);
 
  this.apiSevice.updateRestuarant(this.restId,updateRestDetails)
  .subscribe(()=>{
  alert('Restuarant Details Updated Successfully')
   this.router.navigateByUrl('')
    
  })
}
}
