import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';

export const postRoutes: Routes = [
    {
        path: 'post',
        children: [
            { path: '', component: PostsComponent },
        ]
    },
];

export const PostRouting: ModuleWithProviders = RouterModule.forChild(postRoutes);
