import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { GraphBuilderComponent } from './graph-builder/graph-builder.component';
import { TextboxComponent } from './shared/components/input/textbox/textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    GraphBuilderComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
