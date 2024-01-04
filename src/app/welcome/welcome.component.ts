import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ConsumerUserAccount} from "../generated/ConsumerUserAccount";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  account?: ConsumerUserAccount;
  public constructor(private api: ApiService) {
  }

  public async ngOnInit() {
    this.account = await this.api.getClient().consumer().account().get();
  }

}
