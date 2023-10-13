import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";


const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: 'full'},
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
];

export default routes;