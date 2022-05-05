import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QpageComponent } from './qpage/qpage.component';

const routes: Routes = [
  {path:'',component:QpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
