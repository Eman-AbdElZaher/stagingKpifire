import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/mainLayout/navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { SideBarComponent } from './layout/mainLayout/side-bar/side-bar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SideBarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FeaturesModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
