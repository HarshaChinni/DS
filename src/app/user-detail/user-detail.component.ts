import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  private userDetails = {};

  constructor() {}

  ngOnInit(): void {
    // this.route.params
    //     .switchMap((params: Params) => this.contactService.getById(params['id']))
    //     .subscribe((contact :Contact) => this.contact = contact);

    // Read item:
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));

    console.log(this.userDetails);
  }
}
