import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() results;
  grids = 4;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.grids = (window.innerWidth <= 400) ? 1 : 4;
  }

  onResize(event) {
    this.grids = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  openDialog(r)
  {
  	this.dialog.open(DetailsComponent, {
  		data: r
  	});
  }

}
