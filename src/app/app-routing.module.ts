import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { UserDetailComponent } from "./user-detail/user-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DisplayUserListComponent } from "./display-user-list/display-user-list.component";

export const appRoutes: Routes = [
  { path: "user/:id", component: UserDetailComponent },
  {
    path: "users",
    component: DisplayUserListComponent
  },
  { path: "", component: DashboardComponent },
  { path: "**", component: PageNotFoundComponent }
];
