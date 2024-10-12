import { Injectable } from '@angular/core';
import { Idea } from './../models/ideia.model';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private storageKey = 'ideas';
  private ideaToEdit: Idea | null = null;

  constructor() { }

  getIdeas(): Idea[] {
    const storedIdeas = localStorage.getItem(this.storageKey);
    return storedIdeas ? JSON.parse(storedIdeas) : [];
  }

  saveIdea(idea: Idea): void {
    const ideas = this.getIdeas();

    if (idea.id) { // Se já tiver um id, então é uma edição
      const index = ideas.findIndex(i => i.id === idea.id);
      if (index !== -1) {
        ideas[index] = idea; // Atualiza a ideia existente
      }
    } else { // Senão, cria uma nova ideia com um novo ID
      idea.id = new Date().getTime().toString();
      ideas.push(idea);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(ideas));
    alert('Your idea was successfully saved');
  }

  deleteIdea(id: string): void {
    const ideas = this.getIdeas().filter(idea => idea.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(ideas));
  }

  setIdeaToEdit(idea: Idea): void {
    this.ideaToEdit = idea;
  }

  getIdeaToEdit(): Idea | null {
    return this.ideaToEdit;
  }

  clearIdeaToEdit(): void {
    this.ideaToEdit = null;
  }

}
