import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts.component';
import { PostRouting } from './post.routing';

@NgModule({
   imports: [
      FormsModule,
      PostRouting,
   ],
   declarations: [
    PostsComponent
   ],
   providers: [
   ]
})
export class PostModule { }
