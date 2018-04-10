import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LogInComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './core/header/header.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { FoodComponent } from './food/food.component';
import { FoodService } from './services/foodService';
<<<<<<< HEAD
import { UsersComponent } from './users/users.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantService } from './services/restaurantService';
=======
import { SideDishComponent } from './sideDish/sideDish.component';
>>>>>>> ca3943a87423cbfb28b42518b7297ddebb4ae4c9


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    FoodComponent,
<<<<<<< HEAD
    UsersComponent,
    RestaurantsComponent
=======
    SideDishComponent
>>>>>>> ca3943a87423cbfb28b42518b7297ddebb4ae4c9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
<<<<<<< HEAD
  providers: [AuthService,FoodService, RestaurantService],
=======
  providers: [AuthService,FoodService],
>>>>>>> ca3943a87423cbfb28b42518b7297ddebb4ae4c9
  bootstrap: [AppComponent]
})
export class AppModule { }
