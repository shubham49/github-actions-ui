import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { LoaderService } from './services/loader.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertService,
    private authService: AuthenticationService,
    private loaderService: LoaderService) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const showAlert = httpRequest.method !== 'GET';
    let token = `Bearer ${this.authService.getToken()}`;
    const headers = { 'Authorization': token, "X-GitHub-Api-Version": "2022-11-28" }

    this.loaderService.showHideLoader(true);
    return next.handle(httpRequest.clone({ setHeaders: headers }))
      .pipe(
        tap(
          event => {
            showAlert && event instanceof HttpResponse && this.alertService.showSuccessMessage("Operation successful.", true);
            this.loaderService.showHideLoader(false);
          },
          error => {
            const message = error.error.message || 'Some error occured';
            this.alertService.showErrorMessage(message);
            this.loaderService.showHideLoader(false);
          },
        )
      );
  }
}