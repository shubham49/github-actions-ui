import { Component, Input, OnInit } from '@angular/core';
import { WorkflowRun } from '../models/WorkflowRuns';

@Component({
  selector: 'app-run-status',
  templateUrl: './run-status.component.html',
  styleUrls: ['./run-status.component.scss']
})
export class RunStatusComponent implements OnInit {

  @Input() run: WorkflowRun | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
