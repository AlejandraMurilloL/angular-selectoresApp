import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectoresPageComponent } from './pages/selectores-page/selectores-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'selectores', component: SelectoresPageComponent,
        
      },
      {
        path: '**', redirectTo: 'selectores',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
