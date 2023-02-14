import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import {Editor, EditorModule} from 'primeng/editor';
import { DatePipe } from '@angular/common';
import { TopCommentComponent } from './topComment/topComment.component';

@NgModule({
  declarations: [	
    AppComponent,
    CommentsComponent,
    TopCommentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    FormsModule,
    EditorModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
