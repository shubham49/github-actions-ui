import { Component, OnInit } from '@angular/core';
import { Repo } from '../models/Repo';
import { AuthenticationService } from '../services/authentication.service';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  availableRepos: Repo[] = [];
  selectedRepos: string[] = [];
  selectedPac = "";
  selectedOrg = "";
  constructor(private githubService: GithubService, private authSerivce: AuthenticationService) { }

  ngOnInit(): void {
    this.githubService.getAllRepos().subscribe(repos => {
      this.availableRepos = repos;
      console.log("repos", repos);
    });
    this.selectedRepos = this.authSerivce.getTrackingRepos();
    this.selectedPac = this.authSerivce.getToken();
    this.selectedOrg = this.authSerivce.getOrg();
  }

  saveToken(pac: string) {
    this.authSerivce.saveToken(pac);
  }

  selectRepo(repo: Repo, selected: boolean) {
    console.log("updated", repo, selected);
    if (selected) {
      this.selectedRepos.push(repo.name);
    } else {
      this.selectedRepos = this.selectedRepos.filter(e => e !== repo.name);
    }
    this.authSerivce.saveTrackingRepos(this.selectedRepos);
  }

  pacChange() {
    this.authSerivce.saveToken(this.selectedPac);
  }

  orgChange() {
    this.authSerivce.saveOrg(this.selectedOrg);
  }

}
