import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './features/login/login.module';
import { HomeModule } from './features/home/home.module';
import { DashboardModule } from './features/dashboard/dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    DashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
