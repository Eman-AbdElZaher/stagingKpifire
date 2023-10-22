import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './listView/table/table.component';
import { MaterialModule } from '../material/material.module';
import { FilterOPtionsComponent } from './listView/filter-options/filter-options.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TableComponent, FilterOPtionsComponent],
  imports: [CommonModule, MaterialModule, SharedModule, FormsModule],
  exports: [TableComponent, FilterOPtionsComponent],
})
export class FeaturesModule {}
