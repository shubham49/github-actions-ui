import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { GithubService } from '../services/github.service';
import { Observable, forkJoin } from 'rxjs';
import { WorkflowRuns } from '../models/WorkflowRuns';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  reposWorkflowRuns: WorkflowRuns[] = [];
  constructor(private authService: AuthenticationService,
    private githubService: GithubService) { }

  ngOnInit(): void {
    const trackingRepos = this.authService.getTrackingRepos();

    forkJoin(trackingRepos.map((element: string) => this.githubService.getWorkflowRuns(element)))
      .subscribe((data: any) => this.reposWorkflowRuns = data);
  }

  openRun(url: string) {
    window.open(url, '_blank');
  }

}
