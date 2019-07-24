import { Component } from '@angular/core';
import { IGithubResponseModel } from '../models/github-response.model';
import { environment } from '../environments/environment';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  responseModel: IGithubResponseModel;
  userName: string;

  constructor(private service: HttpService) {
  }

  async onSearch() {

    if (this.userName) {
      let url = environment.github_api_url + this.userName;

      this.service.get(url).subscribe((data: any) => {
        this.responseModel = data;
        this.service.get(this.responseModel.repos_url).subscribe((repos_data: any) => {
          repos_data.sort(function (x1, x2) {
            return x2.stargazers_count > x1.stargazers_count ? 1 : -1
          });

          this.responseModel.repos = repos_data;
        }, error => this.handleError(error));
      }, error => this.handleError(error));
    }
    else{
      alert('please enter name');  
    }
  }

  async handleError(error) {
    this.responseModel = null;
    this.userName = "";
    console.log(error.message);
    alert(error.message);
  }
}