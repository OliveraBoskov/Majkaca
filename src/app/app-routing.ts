import { LogInComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { FoodComponent } from "./food/food.component";
import { SideDishComponent } from "./sideDish/sideDish.component";

const routes: Routes = [
    // { path: 'login', component: LogInComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    // { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent},
    { path: 'food', component: FoodComponent},
    { path: 'sideDish', component: SideDishComponent}
]

const config: ExtraOptions = {
    useHash: true
}
@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})

export class AppRoutingModule {}