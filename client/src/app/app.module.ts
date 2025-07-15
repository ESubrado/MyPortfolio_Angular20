import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { KENDO_PROGRESSBAR } from '@progress/kendo-angular-progressbar'
import { providePrimeNG } from 'primeng/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';
import { AddStoryComponent } from './components/add-story/add-story.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
//import { HomeComponent } from './components/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';

import Aura from '@primeuix/themes/aura';

@NgModule({ 
    declarations: [
        AppComponent,
        //HomeComponent,
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
    ], 
    providers: [
        provideHttpClient(withInterceptorsFromDi()),       
    ],
    //entryComponents: [ModalComponentComponent]  
})
    
export class AppModule { }
