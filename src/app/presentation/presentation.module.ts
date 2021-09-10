import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './helper/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActivityComponent } from './pages/activity/activity.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
  },
];

@NgModule({
  declarations: [ActivityComponent, NavbarComponent],
  imports: [
    CommonModule,
    CoreModule,
    DataModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [ActivityComponent],
})
export class PresentationModule {}
