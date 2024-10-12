import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CreateIdeaComponent } from "./components/ideas/create-idea/create-idea.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListIdeasComponent } from "./components/ideas/list-ideas/list-ideas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CreateIdeaComponent,
    FormsModule,
    CommonModule,
    ListIdeasComponent,
    RouterModule
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'spark-ideas-crud';
}


