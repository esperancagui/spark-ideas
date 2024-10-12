import { IdeaService } from './../../../services/idea.service';
import { Idea } from './../../../models/ideia.model';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Importando o FormsModule
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-idea',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],  // Adicionando o FormsModule aqui
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

  constructor(
    private ideaService: IdeaService,
    private router: Router
  ){}

  ngOnInit(): void {
    const ideaToEdit = this.ideaService.getIdeaToEdit();
    if (ideaToEdit) {
      this.idea = ideaToEdit
    }
  }

  loadIdeas(){
    this.ideas = this.ideaService.getIdeas()
  }

  deleteIdea(id:string){
    this.ideaService.deleteIdea(id)
    this.loadIdeas()
  }

  saveIdea(form: NgForm){

    if (form.valid) {
      this.ideaService.saveIdea(this.idea);
      this.ideaService.clearIdeaToEdit();
      this.resetForm();
      this.loadIdeas();
      this.router.navigate(['/listIdeas']);
    } else {
      alert('Please, fill out all fields before saving')
    }

  }

  cancel(){
    if (confirm('Are you sure you want to cancel?')) {
      this.ideaService.clearIdeaToEdit();
      this.router.navigate(['/listIdeas']);
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
