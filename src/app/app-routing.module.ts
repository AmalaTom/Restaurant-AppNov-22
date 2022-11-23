import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { DeleteResturantComponent } from './delete-resturant/delete-resturant.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { ViewResturantComponent } from './view-resturant/view-resturant.component';

const routes: Routes = [
  //define path for each component
  //ResturantsListComponent-localhost:4200
  {
    path:'',component:ResturantsListComponent
  },
  //ViewResturantComponent-localhost:4200/viewResturant
  {
    path:'view-resturant/:id',component:ViewResturantComponent
  },
  //AddResturantComponent -localhost:4200/addResturant
  {
  path:'add-resturant',component:AddResturantComponent 
  },
  //UpdateResturantComponent-localhost:4200/updateResturant
  {
    path:'update-resturant/:id',component:UpdateResturantComponent
  },
  //DeleteResturantComponent-localhost:4200/deleteResturant
  {
    path:'delete-resturant/:id',component:DeleteResturantComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
