import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../../../services/idea.service';
import { Idea } from '../../../models/ideia.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ideas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-ideas.component.html',
  styleUrl: './list-ideas.component.scss'
})
export class ListIdeasComponent implements OnInit {

  ideas:Idea[] = [];

  constructor(
    private ideaService: IdeaService,
    private router: Router
  ) { }

  createIdeaPath() {
    this.router.navigate(['/createIdea'])
  }

  ngOnInit(): void {
    this.loadIdeas();
  }

  loadIdeas(): void {
    this.ideas = this.ideaService.getIdeas();
  }

  deleteIdea(id: string): void{
    this.ideaService.deleteIdea(id)
    this.loadIdeas()
  }

  limparLocalStorage() {
    localStorage.clear();
    console.log('LocalStorage limpo com sucesso!');
  }


}
