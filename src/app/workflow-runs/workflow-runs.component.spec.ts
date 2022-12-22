import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowRunsComponent } from './workflow-runs.component';

describe('WorkflowRunsComponent', () => {
  let component: WorkflowRunsComponent;
  let fixture: ComponentFixture<WorkflowRunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowRunsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
