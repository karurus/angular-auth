import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { GetPhotoService } from './services/getPhoto.service';
import { GetTestService } from './services/getTest.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginService } from './services/login.service';
import {AuthguardGuard} from './authguard.guard';
import { UserManagementService } from './services/user-management.service';
import { UserManagementComponent } from './components/user-management/user-management.component';

const appRoutes: Routes = [
  {path: '',component: LoginComponent},  
  {path: 'home',canActivate: [AuthguardGuard],component: HomeComponent},
  {path: 'user',canActivate: [AuthguardGuard],component: UserComponent},
  {path: 'about',canActivate: [AuthguardGuard],component: AboutusComponent},
  { path: 'test',canActivate: [AuthguardGuard], component: TestComponent },
  {path: 'user-management',canActivate: [AuthguardGuard],component: UserManagementComponent},
  {path: '**',canActivate: [AuthguardGuard],component: LoginComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    TestComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetPhotoService, GetTestService,LoginService,AuthguardGuard,UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }