import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { HttpClientModule } from '@angular/common/http';\n\nimport { MatCardModule } from '@angular/material/card';\nimport { MatButtonModule } from '@angular/material/button';\nimport { MatIconModule } from '@angular/material/icon';\nimport { MatGridListModule } from '@angular/material/grid-list';\n\nimport { AppRoutingModule } from './app-routing.module';\nimport { AppComponent } from './app.component';\nimport { TourListComponent } from './components/tour-list/tour-list.component';\nimport { TourDetailComponent } from './components/tour-detail/tour-detail.component';\nimport { TourCardComponent } from './components/tour-card/tour-card.component';\n\n@NgModule({\n  declarations: [\n    AppComponent,\n    TourListComponent,\n    TourDetailComponent,\n    TourCardComponent\n  ],\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    HttpClientModule,\n    AppRoutingModule,\n    MatCardModule,\n    MatButtonModule,\n    MatIconModule,\n    MatGridListModule\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }