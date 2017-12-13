import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatAutocompleteModule, MatProgressBarModule, MatDialogModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TableauComponent } from './tableau/tableau.component';
import { RecommenderComponent } from './recommender/recommender.component';
import { RecommenderService } from './recommender/recommender.service';

const appRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path:'recommender/:type', component: RecommenderComponent},
  { path:'tableau', component:TableauComponent},
  { path: '**', redirectTo: 'homepage' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TableauComponent,
    RecommenderComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecommenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
