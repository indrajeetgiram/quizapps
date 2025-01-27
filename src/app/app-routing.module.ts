import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { AngularComponent } from './pages/angular/angular.component';
import { HtmlComponent } from './pages/html/html.component';
import { CssComponent } from './pages/css/css.component';
import { ReactComponent } from './pages/react/react.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'css', component: CssComponent },
  { path: 'react', component: ReactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
