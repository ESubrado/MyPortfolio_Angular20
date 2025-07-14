import { Component } from '@angular/core';
import { Stories } from 'src/app/models/tutorial.model';
import { StoryService } from 'src/app/services/tutorial.service';

@Component({
    selector: 'app-add-tutorial',
    templateUrl: './add-tutorial.component.html',
    styleUrls: ['./add-tutorial.component.css'],
    standalone: false
})
export class AddStoryComponent {
  story: Stories = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: StoryService) {}

  saveTutorial(): void {
    const data = {
      title: this.story.title,
      description: this.story.description
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.story = {
      title: '',
      description: '',
      published: false
    };
  }
}
