import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPublicationComponent } from './admin-publication/admin-publication.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminBlacklistComponent } from './admin-blacklist/admin-blacklist.component';
import { UserPublicationComponent } from './user-publication/user-publication.component';
import { UserBlacklistComponent } from './user-blacklist/user-blacklist.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    HomeComponent,
    FacultyComponent,
    AboutComponent,
    AdminComponent,
    MainComponent,
    AdminLoginComponent,
    AdminPublicationComponent,
    AdminDashboardComponent,
    AdminUserComponent,
    AdminBlacklistComponent,
    UserPublicationComponent,
    UserBlacklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
