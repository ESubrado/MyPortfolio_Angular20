import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddStoryComponent } from './components/add-tutorial/add-tutorial.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddStoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
