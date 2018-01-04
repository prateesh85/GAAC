import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllsectorsinfoComponent } from './allsectorsinfo/allsectorsinfo.component';
import { ListoperationsService } from './listoperations.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllsectorsinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ListoperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
