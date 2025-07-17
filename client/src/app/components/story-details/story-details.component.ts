import { Component, Input, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/story.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stories } from 'src/app/models/story.model';

@Component({
    selector: 'app-story-details',
    templateUrl: './story-details.component.html',
    styleUrls: ['./story-details.component.css'],
    standalone: false
})
export class StoryDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentStory: Stories = {
    title: '',
    description: '',
    published: false
  };

  message = '';

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    }
  }

  getTutorial(id: string): void {
    this.storyService.get(id).subscribe({
      next: (data) => {
        this.currentStory = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentStory.title,
      description: this.currentStory.description,
      published: status
    };

    this.message = '';

    this.storyService.update(this.currentStory.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentStory.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateTutorial(): void {
    this.message = '';

    this.storyService
      .update(this.currentStory.id, this.currentStory)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.storyService.delete(this.currentStory.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tutorials']);
      },
      error: (e) => console.error(e)
    });
  }
}
