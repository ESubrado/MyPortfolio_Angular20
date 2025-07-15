import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Stories } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';
import { AddStoryComponent } from '../add-story/add-story.component';
@Component({
    selector: 'app-stories-list',
    templateUrl: './stories-list.component.html',
    styleUrls: ['./stories-list.component.css'],
    standalone: false,
})
export class StoriesListComponent implements OnInit {
  stories?: Stories[];
  currentStory: Stories = {};
  currentIndex = -1;
  title = '';

  constructor(private storyService: StoryService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  openFormModal() {
    const dialogRef = this.dialog.open(AddStoryComponent, {panelClass: "mobile-width"});

    dialogRef.componentInstance.formSubmit.subscribe((data: any) => {
      //console.log('Form submitted with:', data);
      dialogRef.close();
    });
  }

  retrieveTutorials(): void {
    this.storyService.getAll().subscribe({
      next: (data) => {
        this.stories = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentStory = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Stories, index: number): void {
    this.currentStory = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.storyService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentStory = {};
    this.currentIndex = -1;

    this.storyService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.stories = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
