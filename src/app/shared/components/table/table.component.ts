import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { MatTableDataSource,  } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  database : any = []
  displayedColumns: string[] = ['sno', 'id', 'name', 'date', 'department', 'attachment', 'spl_instruction'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();


  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.database = this._dataService.getAlldata().subscribe((data) =>{
      this.database = data;
      this.dataSource = new MatTableDataSource<any>(this.database);
    } )

    

    console.log(this.database)

  }
}
