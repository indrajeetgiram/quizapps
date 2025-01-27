import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { AngularComponent } from './pages/angular/angular.component';
import { HtmlComponent } from './pages/html/html.component';
import { CssComponent } from './pages/css/css.component';
import { ReactComponent } from './pages/react/react.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JavascriptComponent,
    AngularComponent,
    HtmlComponent,
    CssComponent,
    ReactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
