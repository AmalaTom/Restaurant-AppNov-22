import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { ViewResturantComponent } from './view-resturant/view-resturant.component';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { DeleteResturantComponent } from './delete-resturant/delete-resturant.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {  HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ResturantsListComponent,
    ViewResturantComponent,
    AddResturantComponent,
    UpdateResturantComponent,
    DeleteResturantComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
