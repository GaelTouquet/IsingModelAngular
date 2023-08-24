import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsingModelComponent } from './ising-model/ising-model.component';
import { VisualComponent } from './ising-model/visual/visual.component';
import { ConsoleComponent } from './ising-model/console/console.component';

@NgModule({
  declarations: [
    AppComponent,
    IsingModelComponent,
    VisualComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
