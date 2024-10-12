import { Routes } from '@angular/router';
import { ListIdeasComponent } from './components/ideas/list-ideas/list-ideas.component';
import { CreateIdeaComponent } from './components/ideas/create-idea/create-idea.component';

export const routes: Routes = [

  {
    path:'',
    redirectTo: 'listIdeas',
    pathMatch: 'full'
  },
  {
    path: 'createIdea',
    component: CreateIdeaComponent
  },
  {
    path:'listIdeas',
    component: ListIdeasComponent
  }
];
