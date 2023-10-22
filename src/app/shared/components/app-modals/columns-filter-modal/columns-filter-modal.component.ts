import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-columns-filter-modal',
  templateUrl: './columns-filter-modal.component.html',
  styleUrls: ['./columns-filter-modal.component.scss'],
})
export class ColumnsFilterModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ColumnsFilterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  closeDialog(): void {
    this.dialogRef.close(this.data.columns);
  }
}
