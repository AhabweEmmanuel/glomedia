import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpListComponent } from './components/sp-list/sp-list.component';
import { SpProfileComponent } from './components/sp-profile/sp-profile.component';


// const routes: Routes = [];
const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "sp-profile/:id", component: SpProfileComponent},
  {path: "sp-list", component: SpListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
