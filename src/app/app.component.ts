import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnsFilterModalComponent } from './shared/components/app-modals/columns-filter-modal/columns-filter-modal.component';
import { goalListService } from './core/services/goalList.service';
import { IGoal } from './core/models/goal';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TableComponent } from './features/listView/table/table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isMenuCollapsed: boolean = false;
  columns: { name: string; selected: boolean }[] = [
    { name: 'title', selected: true },
    { name: 'description', selected: true },
    { name: 'department', selected: true },
    { name: 'category', selected: true },
    { name: 'state', selected: true },
    { name: 'owner', selected: true },
  ];
  displayedColumns: string[] = this.columns
    .filter((item) => item.selected)
    .map((item) => item.name);

  tableRows: IGoal[] = [];
  @ViewChild('TableRef') appTableRef: TableComponent;
  dataSource = new MatTableDataSource<any>(this.tableRows);
  constructor(
    private _dialog: MatDialog,
    private _goalListsevice: goalListService
  ) {}
  ngOnInit(): void {
    this._goalListsevice.getList().subscribe((data) => (this.tableRows = data));
  }
  optionList: string[] = this.tableRows.map((elem) => elem.department);
  openFilterColumns() {
    const dialogRef = this._dialog.open(ColumnsFilterModalComponent, {
      width: '600px',
      position: {
        top: '50px',
      },
      data: {
        columns: this.columns,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.displayedColumns = result
          .filter((item: any) => item.selected)
          .map((item: any) => item.name);
      }
    });
  }
  applyFilter(event: Event) {
    this.appTableRef.applyTableFilter(event);
  }
}
