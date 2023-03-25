import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/service/reqresapi.service';
import { User } from 'src/model/user';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  //private subs = new Subscription();
  private dataArray = new Array<any>();;
  public dataSource : any;
  
  displayedColumns: string[] = ['id','avatar','username','first_name','last_name','email'];

  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  



  constructor(private userService: UserService,private _snackBar: MatSnackBar) { 
   this.dataSource = new  MatTableDataSource<User>;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit():void {
    this.userService.getUsers().subscribe(response => {
      this.dataArray = response.data;
      this.dataSource = new MatTableDataSource<User>(this.dataArray);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      });
  }

  //ngOnDestroy() {
    //if (this.subs) {
     // this.subs.unsubscribe();
    //}
  //}


}
