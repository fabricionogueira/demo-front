import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftRegistrationComponent } from './aircraft-registration/aircraft-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {   path: 'aircraft',   component: AircraftRegistrationComponent   }
];

@NgModule({
  declarations: [AircraftRegistrationComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule
  ],
  exports: [
    RouterModule
  ]
})
export class AircraftModule { }
