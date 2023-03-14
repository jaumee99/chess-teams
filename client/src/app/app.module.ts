import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaulellComponent } from './projecte/components/taulell/taulell.component';
import { Taulell2Component } from './projecte/components/taulell2/taulell2.component';

@NgModule({
  declarations: [
    AppComponent,
    TaulellComponent,
    Taulell2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
