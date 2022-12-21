import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.getAlert().subscribe(data => {
      this._snackBar.open(data.message, 'dismiss', { duration: 5000 });
    })
  }

}

