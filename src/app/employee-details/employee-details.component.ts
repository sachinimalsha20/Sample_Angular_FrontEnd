import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {EmployeeService} from "../service/employee.service";
import {Employee, EmployeeColumns} from "../model/Employee";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  displayedColumns: string[] = EmployeeColumns.map((col) => col.key);
  columnsSchema: any = EmployeeColumns;
  dataSource = new MatTableDataSource<Employee>();
  valid: any = {};

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(public dialog: MatDialog, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployee().subscribe((res: any) => {
      this.dataSource.data = res;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editRow(row: Employee) {
    if (row.id === 0) {
      this.employeeService.addEmployee(row).subscribe((newUser: Employee) => {
        row.id = newUser.id;
        row.isEdit = false;
      });
    }
    else {
      this.employeeService.updateEmployee(row).subscribe(() => (row.isEdit = false));
    }
  }

  addRow() {
    const newRow: Employee = {
      id: 0,
      fistName: '',
      lastName: '',
      email: '',
      birthday: '',
      isEdit: true,
      isPublic:true,
      isSelected: false,
    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (e: Employee) => e.id !== id
      );
    });
  }

  removeSelectedRows() {
    const users = this.dataSource.data.filter((e: Employee) => e.isSelected);
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.employeeService.deleteEmployees(users).subscribe(() => {
            this.dataSource.data = this.dataSource.data.filter(
              (e: Employee) => !e.isSelected
            );
          });
        }
      });
  }


  inputHandler(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {};
    }
    this.valid[id][key] = e.target.validity.valid;
  }

  disableSubmit(id: number) {
    if (this.valid[id]) {
      return Object.values(this.valid[id]).some((item) => item === false);
    }
    return false;
  }
}
