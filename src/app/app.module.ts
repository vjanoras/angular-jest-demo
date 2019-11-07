import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { StateModule } from './state/state.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@core/in-memory-data.service';

import { HelloComponent } from './exercise2/hello.component';
import { DataService } from './exercise3/data.service';

@NgModule({
  declarations: [AppComponent , HelloComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StateModule.forRoot(),
    CoreModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
