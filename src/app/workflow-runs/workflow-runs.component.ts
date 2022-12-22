import { Component, Input, OnInit } from '@angular/core';
import { WorkflowRun, WorkflowRuns } from '../models/WorkflowRuns';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-workflow-runs',
  templateUrl: './workflow-runs.component.html',
  styleUrls: ['./workflow-runs.component.scss']
})
export class WorkflowRunsComponent implements OnInit {

  @Input() workflowRuns: WorkflowRuns = { workflow_runs: [] };
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  openRun(url: string) {
    window.open(url, '_blank');
  }

  cancelRun(run: WorkflowRun, event: Event) {
    event.stopPropagation();
    this.githubService.cancelRun(run.repository.name, run.id).subscribe(data => console.log('cancelled run'));
  }
}
