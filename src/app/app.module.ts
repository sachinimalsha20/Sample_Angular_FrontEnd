import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import { KilinochchiComponent } from './kilinochchi/kilinochchi.component';
import { JaffnaComponent } from './jaffna/jaffna.component';
import { MulathiuComponent } from './mulathiu/mulathiu.component';
import { VavuniyaComponent } from './vavuniya/vavuniya.component';
import { MannarComponent } from './mannar/mannar.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatTreeModule} from "@angular/material/tree";
import {MatButtonModule} from "@angular/material/button";
import { J1Component } from './jaffna/j1/j1.component';
import { J2Component } from './jaffna/j2/j2.component';
import { J3Component } from './jaffna/j3/j3.component';
import { K1Component } from './kilinochchi/k1/k1.component';
import { K2Component } from './kilinochchi/k2/k2.component';
import { M1Component } from './mannar/m1/m1.component';
import { M2Component } from './mannar/m2/m2.component';
import { Mulaiu1Component } from './mulathiu/mulaiu1/mulaiu1.component';
import { Mulaiu2Component } from './mulathiu/mulaiu2/mulaiu2.component';
import { Vavuniya1Component } from './vavuniya/vavuniya1/vavuniya1.component';
import { Vavuniya2Component } from './vavuniya/vavuniya2/vavuniya2.component';
import { IntigatesComponent } from './sidenav/intigates/intigates.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {MatTableModule} from "@angular/material/table";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSortModule} from "@angular/material/sort";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { CreateNewIndicatorComponent } from './create-new-indicator/create-new-indicator.component';
import {MatSelectModule} from "@angular/material/select";
import { Error404Component } from './error404/error404.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { BodyComponent } from './body/body.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginMessageModalComponent } from './login-message-modal/login-message-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    KilinochchiComponent,
    JaffnaComponent,
    MulathiuComponent,
    VavuniyaComponent,
    MannarComponent,
    HomeComponent,
    J1Component,
    J2Component,
    J3Component,
    K1Component,
    K2Component,
    M1Component,
    M2Component,
    Mulaiu1Component,
    Mulaiu2Component,
    Vavuniya1Component,
    Vavuniya2Component,
    IntigatesComponent,
    EmployeeDetailsComponent,
    ConfirmDialogComponent,
    LoginPageComponent,
    CreateNewProjectComponent,
    CreateNewIndicatorComponent,
    Error404Component,
    BodyComponent,
    SignUpComponent,
    SignInComponent,
    LoginMessageModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatTreeModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCheckboxModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [EmployeeDetailsComponent,ConfirmDialogComponent,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
