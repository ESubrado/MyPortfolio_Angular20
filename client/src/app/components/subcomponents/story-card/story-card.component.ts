import { Component, Input } from '@angular/core';
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_LAYOUT } from "@progress/kendo-angular-layout";
import { Stories } from 'src/app/models/story.model';

@Component({
  selector: 'app-story-card',
  imports: [KENDO_LAYOUT, KENDO_BUTTONS],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.css',  
  standalone: true,
})
export class StoryCardComponent {

  @Input() public story? : Stories[] | any;

  @Input() public borderTop: boolean | any;

}
