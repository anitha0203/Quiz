import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QpageComponent } from './qpage/qpage.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {path:'question',component:QuestionComponent},
  {path:'qpage',component:QpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
