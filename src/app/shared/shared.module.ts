import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsFilterModalComponent } from './components/app-modals/columns-filter-modal/columns-filter-modal.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColumnFilterMenuComponent } from './components/column-filter-menu/column-filter-menu.component';

@NgModule({
  declarations: [ColumnsFilterModalComponent, ColumnFilterMenuComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [ColumnsFilterModalComponent, ColumnFilterMenuComponent],
})
export class SharedModule {}
