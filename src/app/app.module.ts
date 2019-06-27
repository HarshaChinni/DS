import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { appRoutes } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DisplayUserListComponent } from "./display-user-list/display-user-list.component";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    DashboardComponent,
    DisplayUserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
