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

  constructor(){}

}
