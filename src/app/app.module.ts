import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityProvider } from './core/helpers/provider/repository/activity-repository.provider';
import { MaterialModule } from './presentation/helper/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: ActivityProvider,
  bootstrap: [AppComponent],
})
export class AppModule {}
