import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story-form', 
  templateUrl: './add-story-form.component.html',
  styleUrl: './add-story-form.component.css',
  standalone: true, // If using standalone components
  imports: [ReactiveFormsModule, NgIf]  
})
export class AddStoryFormComponent {

  @Output() formSubmit = new EventEmitter<any>();
  myStoryForm: FormGroup;
  submittedData: any;

  constructor(private fb: FormBuilder) {
    // Define form fields with validation rules
    this.myStoryForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Submit handler
  onSubmit(): void {
    if (this.myStoryForm.valid) {
      console.log('Form Data:', this.myStoryForm.value); // Form values on submission
    } else {
      console.log('Form is invalid.');
    }
  }
}
