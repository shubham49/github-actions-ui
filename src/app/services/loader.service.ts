import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new Subject<boolean>();
  constructor() { }

  getLoader() {
    return this.loaderSubject;
  }

  showHideLoader(flag: boolean) {
    this.loaderSubject.next(flag);
  }
}
