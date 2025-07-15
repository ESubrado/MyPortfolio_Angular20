import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { AddStoryComponent } from './components/add-story/add-story.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },
  { path: 'stories', component: StoriesListComponent },
  { path: 'stories/:id', component: StoryDetailsComponent },
  { path: 'add', component: AddStoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
