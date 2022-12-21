import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo } from '../models/Repo';
import { WorkflowRuns } from '../models/WorkflowRuns';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  gitApiUrl = "https://cors-anywhere.herokuapp.com/https://api.github.com";
  constructor(private http: HttpClient, private authService: AuthenticationService) { }


  getAllRepos() {
    const orgName = this.authService.getOrg();
    return this.http.get<Repo[]>(`${this.gitApiUrl}/orgs/${orgName}/repos`);
  }

  getWorkflowRuns(repo: string) {
    const orgName = this.authService.getOrg();
    return this.http.get<WorkflowRuns>(`${this.gitApiUrl}/repos/${orgName}/${repo}/actions/runs?per_page=5`);
  }

}
