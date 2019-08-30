import { NgModule } from '@angular/core';
import {MatButtonModule, MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  FormsModule,
  MatMenuModule,
  MatCardModule,
  MatGridListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule
];

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
