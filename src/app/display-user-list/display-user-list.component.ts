import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-display-user-list",
  templateUrl: "./display-user-list.component.html",
  styleUrls: ["./display-user-list.component.css"]
})
export class DisplayUserListComponent implements OnInit {
  private users: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(usersData => {
      this.users = usersData;
    });
  }

  navigateToUserDetail(user) {
    // Create item:
    localStorage.setItem("userDetails", JSON.stringify(user));

    this.router.navigate(["user/", user.id]);
  }
}
