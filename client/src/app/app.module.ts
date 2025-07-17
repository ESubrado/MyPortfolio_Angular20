import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { providePrimeNG } from 'primeng/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponentComponent } from './components/subcomponents/modal-component/modal-component.component';
import { AddStoryComponent } from './components/add-story/add-story.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddStoryFormComponent } from './components/add-story-form/add-story-form.component';
import { KENDO_LISTVIEW } from '@progress/kendo-angular-listview'; 
//import { ListViewComponent } from '@progress/kendo-angular-listview';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { StoryCardComponent } from './components/subcomponents/story-card/story-card.component';

import Aura from '@primeuix/themes/aura';
import { NgIf } from '@angular/common';

@NgModule({ 
    declarations: [
        AppComponent,       
        TopNavComponent,
        FooterComponent,
        AddStoryComponent,
        StoryDetailsComponent,
        StoriesListComponent,
        ModalComponentComponent,                
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        NoopAnimationsModule ,        
        AppRoutingModule,
        NgbModule,
        FormsModule, 
        ReactiveFormsModule,
        AddStoryFormComponent,  
        //ListViewComponent,
        ListViewModule,
        StoryCardComponent
    ], 
    exports: [
        ReactiveFormsModule
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),       
    ],
    //entryComponents: [ModalComponentComponent]  
})
    
export class AppModule { }
