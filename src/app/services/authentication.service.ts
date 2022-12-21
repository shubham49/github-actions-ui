import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, UserAuthResp, Authority, Role } from '../models/User';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(user: User) {
    const body = JSON.stringify(user);
    const headers: HttpHeaders = new HttpHeaders({ 'content-Type': 'application/json' });

    this.http.post<UserAuthResp>(environment.serverUrl + '/user/login', body, { headers })
      .subscribe(data => {
        sessionStorage.setItem('loggedUser',
          JSON.stringify({
            user: data.user,
            token: data.token
          }));
        window.location.reload();
      });

  }
  saveToken(pac: string) {
    localStorage.setItem("github-pac", pac);
  }

  getToken() {
    return localStorage.getItem("github-pac") || "";
  }

  saveTrackingRepos(repos: string[]) {
    localStorage.setItem("tracking-repos", JSON.stringify(repos));
  }

  getTrackingRepos() {
    const repos = localStorage.getItem("tracking-repos");
    if (repos) {
      return JSON.parse(repos);
    }
    return [];
  }
}
