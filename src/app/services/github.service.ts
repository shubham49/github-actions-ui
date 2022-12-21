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
  orgName = "tcs-chennai"
  constructor(private http: HttpClient, private authService: AuthenticationService) { }


  getAllRepos() {
    return this.http.get<Repo[]>(`${this.gitApiUrl}/orgs/${this.orgName}/repos`);
  }

  getWorkflowRuns(repo: string) {
    return this.http.get<WorkflowRuns>(`${this.gitApiUrl}/repos/${this.orgName}/${repo}/actions/runs?per_page=5`);
  }

}
