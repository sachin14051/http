import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { TableComponent } from './shared/components/table/table.component';
import {HttpClientModule} from '@angular/common/http';
import { DatapipePipe } from './shared/pipe/datapipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { DummyComponent } from './shared/components/dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DatapipePipe,
    DummyComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
