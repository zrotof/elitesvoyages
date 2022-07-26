import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FretDhlComponent } from './components/fret-dhl/fret-dhl.component';

const routes: Routes = [
  {path:'', component: FretDhlComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FretDhlRoutingModule { }
