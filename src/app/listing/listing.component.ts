import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { GithubService } from '../services/github.service';
import { forkJoin } from 'rxjs';
import { WorkflowRuns } from '../models/WorkflowRuns';
import { orderBy } from "lodash";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  reposWorkflowRuns: WorkflowRuns[] = [];
  allWorkflowRuns: WorkflowRuns = { workflow_runs: [] };
  isGroupView = false;

  constructor(private authService: AuthenticationService,
    private githubService: GithubService) { }

  ngOnInit(): void {
    const trackingRepos = this.authService.getTrackingRepos();

    forkJoin(trackingRepos.map((element: string) => this.githubService.getWorkflowRuns(element)))
      .subscribe((data: any) => this.populateData(data));
  }

  populateData(data: any) {
    this.reposWorkflowRuns = data;
    this.reposWorkflowRuns.forEach(runs => this.allWorkflowRuns.workflow_runs.push(...runs.workflow_runs));
    this.allWorkflowRuns.workflow_runs = orderBy(this.allWorkflowRuns.workflow_runs, 'run_started_at', 'desc');
  }

  onViewChange(isGroupView: boolean) {
    this.isGroupView = isGroupView;
  }
}
