import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

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
