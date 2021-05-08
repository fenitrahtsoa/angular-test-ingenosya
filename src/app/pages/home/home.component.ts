import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from './detail/detail.component';
import Student from 'src/app/shared/models/student.model';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  students = new TableVirtualScrollDataSource();;
  displayedColumns = ['first_name', 'last_name', 'email'];
  fileName = 'ExcelStudent.xlsx';  

  constructor(
    private studentService: StudentService,
    public dialog: MatDialog,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    await this.loadData();
    this.isLoading = false;
  }

  async loadData() {
    const data = await this.studentService.getList();
    this.students = new TableVirtualScrollDataSource(data);
  }

  applyFilter(filterValue: string) {
    this.students.filter = filterValue.trim().toLowerCase();
  }

  viewDetail(item: Student) {
    console.log(item)
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '750px',
      data: item ? item : ''
    });
    dialogRef.afterClosed().subscribe(async (result: any) => {
      if (result) {
        this.isLoading = false;
        this.ngOnInit();
      }
    });
  }
  exportexcel(): void {
       /* table id is passed over here */   
       let element = document.getElementById('student-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
  }
}
