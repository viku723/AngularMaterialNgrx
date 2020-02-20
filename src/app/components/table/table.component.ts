import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() products;
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource;
  selection = new SelectionModel<PeriodicElement>(true, []);
  @Output() selectionChange = new EventEmitter();

  ngOnInit() {
    this.selection.changed.subscribe((items) => {
      this.selectionChange.emit(items)
    });
  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.products);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
