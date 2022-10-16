import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KilinochchiComponent} from "./kilinochchi/kilinochchi.component";
import {JaffnaComponent} from "./jaffna/jaffna.component";
import {MulathiuComponent} from "./mulathiu/mulathiu.component";
import {VavuniyaComponent} from "./vavuniya/vavuniya.component";
import {MannarComponent} from "./mannar/mannar.component";
import {HomeComponent} from "./home/home.component";
import {J1Component} from "./jaffna/j1/j1.component";
import {J2Component} from "./jaffna/j2/j2.component";
import {J3Component} from "./jaffna/j3/j3.component";
import {K1Component} from "./kilinochchi/k1/k1.component";
import {K2Component} from "./kilinochchi/k2/k2.component";
import {M1Component} from "./mannar/m1/m1.component";
import {M2Component} from "./mannar/m2/m2.component";
import {Mulaiu1Component} from "./mulathiu/mulaiu1/mulaiu1.component";
import {Mulaiu2Component} from "./mulathiu/mulaiu2/mulaiu2.component";
import {Vavuniya1Component} from "./vavuniya/vavuniya1/vavuniya1.component";
import {Vavuniya2Component} from "./vavuniya/vavuniya2/vavuniya2.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {CreateNewProjectComponent} from "./create-new-project/create-new-project.component";
import {CreateNewIndicatorComponent} from "./create-new-indicator/create-new-indicator.component";
import {Error404Component} from "./error404/error404.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'jaffna', component: JaffnaComponent ,
  children:[
    {path:'jaffna1',component:J1Component},
    {path:'jaffna2',component:J2Component},
    {path:'jaffna3',component:J3Component},
  ]},
  { path: 'mulathiu', component: MulathiuComponent ,
    children:[
      {path: 'mulathiu1',component:Mulaiu1Component},
      {path: 'mulathiu2',component:Mulaiu2Component}
    ]},

  { path: 'kilinichchi', component: KilinochchiComponent,
  children:[
    {path:'kilinichchi1',component:K1Component},
    {path:'kilinichchi2',component:K2Component}
  ]},

  { path: 'vavniya', component: VavuniyaComponent,
  children:[
    {path: 'vavniya1',component:Vavuniya1Component},
    {path: 'vavniya2',component:Vavuniya2Component}
  ]},

  { path: 'mannar', component: MannarComponent ,
    children:[
      {path: 'mannar1',component:M1Component},
      {path: 'mannar2',component:M2Component}
    ]},
  {path:'employee_details',component:EmployeeDetailsComponent},
  {path:'login',component:LoginPageComponent},
  {path:'create_new_project',component:CreateNewProjectComponent},
  {path:'create_new_indicator',component:CreateNewIndicatorComponent},
  {path:'error_404',component:Error404Component},
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'**',component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
