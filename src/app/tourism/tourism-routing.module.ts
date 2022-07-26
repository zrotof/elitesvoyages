import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './components/tour/tour.component';
import { TourismComponent } from './components/tourism/tourism.component';

const routes: Routes = [
  {path:'', component: TourismComponent},
  {path:':id', component: TourComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourismRoutingModule { }
