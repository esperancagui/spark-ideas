import { IdeaService } from './../../../services/idea.service';
import { Idea } from './../../../models/ideia.model';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importando o FormsModule

@Component({
  selector: 'app-create-idea',
  standalone: true,
  imports: [FormsModule],  // Adicionando o FormsModule aqui
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss']  // Corrigido para "styleUrls"
})
export class CreateIdeaComponent {

  idea: Idea = {
    id: '',
    content: '',
    author: '',
    model: ''
  }

  ideas: Idea[] = []

  constructor(private ideaService: IdeaService){}

  ngOnInit(){
    this.loadIdeas()
  }

  loadIdeas(){
    this.ideas = this.ideaService.getIdeas()
  }

  deleteIdea(id:string){
    this.ideaService.deleteIdea(id)
    this.loadIdeas()
  }

  saveIdea(){
    this.ideaService.saveIdea(this.idea)
    this.resetForm()
  }

  cancel(){
    if (confirm('Are you sure you want to cancel?')) {
      window.location.reload()
    }
  }

  resetForm(){
    this.idea = {
      id: '',
    content: '',
    author: '',
    model: ''
    }
  }

}
