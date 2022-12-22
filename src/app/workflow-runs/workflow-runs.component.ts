import { Component, Input, OnInit } from '@angular/core';
import { WorkflowRuns } from '../models/WorkflowRuns';

@Component({
  selector: 'app-workflow-runs',
  templateUrl: './workflow-runs.component.html',
  styleUrls: ['./workflow-runs.component.scss']
})
export class WorkflowRunsComponent implements OnInit {

  @Input() workflowRuns: WorkflowRuns = { workflow_runs: [] };
  constructor() { }

  ngOnInit(): void {
  }

  openRun(url: string) {
    window.open(url, '_blank');
  }
}
