import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stories } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';

@Component({
    selector: 'app-add-story',
    templateUrl: './add-story.component.html',
    styleUrls: ['./add-story.component.css'],
    standalone: false
})
export class AddStoryComponent {
  story: Stories = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  formVisible = false;

  myForm: FormGroup;

  constructor(private tutorialService: StoryService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      //name: ['', Validators.required],
      //email: ['', [Validators.required, Validators.email]],
    });
  }

  toggleForm() {
    this.formVisible = !this.formVisible;
  }

  saveTutorial(): void {
    const data = {
      title: this.story.title,
      description: this.story.description
    };

    if (this.myForm.valid) {
      this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
    } else {
      console.log('Form Invalid');
    }   
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
