import { Injectable } from '@angular/core';
import { Idea } from './../models/ideia.model';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private storageKey = 'ideas';

  constructor() { }

  getIdeas(): Idea[] {
    const storedIdeas = localStorage.getItem(this.storageKey);
    return storedIdeas ? JSON.parse(storedIdeas) : [];
  }

  saveIdea(idea: Idea): void {
    const ideas = this.getIdeas();
    idea.id = new Date().getTime().toString();
    ideas.push(idea);
    localStorage.setItem(this.storageKey, JSON.stringify(ideas));
  }

  deleteIdea(id: string): void {
    const ideas = this.getIdeas().filter(idea => idea.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(ideas));
  }
}
