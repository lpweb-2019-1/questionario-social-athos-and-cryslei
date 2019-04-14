import { Component } from '@angular/core';
import { QuestionarioService } from './questionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  nome = null;
  sexo = null;
  idade = null;
  cidade = null

 
  constructor(private questionario: QuestionarioService){}
  salvar(form){
    this.questionario.salvar(this.nome,this.sexo, this.idade, this.cidade);
    form.reset();
  }
};