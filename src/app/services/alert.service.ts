import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<Alert>();

  constructor() { }

  getAlert() {
    return this.alertSubject;
  }

  showSuccessMessage(message: string, hideAlert = false) {
    this.alertSubject.next({
      type: 'success',
      message,
      hideAlert
    });
  }

  showErrorMessage(message: string, hideAlert = false) {
    this.alertSubject.next({
      type: 'danger',
      message,
      hideAlert
    });
  }

  hideMessage() {
    this.alertSubject.next({
      type: '',
      message: '',
      hideAlert: true
    });
  }
}

interface Alert {
  type: string;
  message: string;
  hideAlert: boolean;
}