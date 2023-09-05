import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DummyServiceService } from '../../service/dummy-service.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  postArray : any
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  constructor(private _dataService:DummyServiceService ) { }

  ngOnInit(): void {
    this.postArray = this._dataService.getAlldata().subscribe((data) =>{
      this.postArray = data;
      this.dataSource = new MatTableDataSource<any>(this.postArray);
      // this.postArray = data
    } );
 
    

  }

}
