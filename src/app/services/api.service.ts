import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    search = new BehaviorSubject("")
    
  //dependency injection-
  constructor(private api:HttpClient) { }

  //userdefined function

  //1.to get all resturant list api- http://localhost:3000/resturants
getResturantsList(){
// use http request get-make api call to http://localhost:3000/resturants
//get()-HttpClient class HttpClientModule Library
//this is an asyncrones function call
  return this.api.get('  http://localhost:3000/restaurants')
}
//2.get a single restaurant details from api
viewRestuarant(restId:any){
  return this.api.get(`http://localhost:3000/restaurants/`+restId)
}
//3.Add restuarant
addRestuarant(newRestuarant:any){
return this.api.post('http://localhost:3000/restaurants/',newRestuarant)
}
//4.to update particular restuarant
updateRestuarant(restId:any,updatedrestBody:any)
{
return this.api.put(`http://localhost:3000/restaurants/`+restId,updatedrestBody)
}
//5.To delete particular restuarant
deleteRestuarant(restId:any){
  return this.api.delete(`http://localhost:3000/restaurants/`+restId)
}

}
