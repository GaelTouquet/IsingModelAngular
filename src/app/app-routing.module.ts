import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsingModelComponent } from './ising-model/ising-model.component';

const routes: Routes = [{
  path: 'ising-model',
  component: IsingModelComponent,},
  { path: '', redirectTo: 'ising-model', pathMatch: 'full' },
  { path: '**', redirectTo: 'ising-model' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
