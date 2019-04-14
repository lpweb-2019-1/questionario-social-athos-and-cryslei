import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {
  listapessoas = [];
  proximoId = 1;
  cidades =["Palmas","Miranorte","Porto Nacional","Luzimangues"]
  
  constructor() {
    if (localStorage.getItem('pessoas')) {
      this.listapessoas = JSON.parse(localStorage.getItem('pessoas'));
    }
  }
  salvar(nome: String,sexo: String, idade: Number,cidade: String )
  {
    const noticia = {
      id: this.proximoId,
      nome: nome,
      idade: idade,
      cidade: cidade,
      sexo: sexo
    }
    this.listapessoas.push(noticia);
    localStorage.setItem('pessoas', JSON.stringify(this.listapessoas)); 

    this.proximoId++;
  };
  
  pessoaMaisNova() {
    const pessoas = JSON.parse(localStorage.getItem('pessoas'));
    let pessoa = null;
    if (pessoas.length === 0) {
      return pessoa;
    }
    let maiorIdade = pessoas[0].idade;
    pessoa = pessoas[0];
    for (let i = 1; i < pessoas.length; i++) {
      if (maiorIdade >= pessoas[i].idade) {
        maiorIdade = pessoas[i].idade;
        pessoa = pessoas[i];
      }
    }
    return pessoa;
  };

  pessoaMaisVelha() {
    const pessoas = JSON.parse(localStorage.getItem('pessoas'));
    let pessoavelha = null;
    if (pessoas.length === 0) {
      return pessoavelha;
    }
    let maiorIdade = pessoas[0].idade;
    pessoavelha = pessoas[0];
    for (let i = 1; i < pessoas.length; i++) {
      if (maiorIdade <= pessoas[i].idade) {
        maiorIdade = pessoas[i].idade;
        pessoavelha = pessoas[i];
      }
    }
    return pessoavelha;
  };

  mediaGeral(){
    var media_idade_homens = 0;
    var media_idade_mulheres = 0;
    var cont_mulher = 0;
    var cont_homem = 0;
    var idade_homem = 0;
    var idade_mulher = 0;
    const pessoas = JSON.parse(localStorage.getItem('pessoas'));
    for (let pessoa of pessoas){
      if (pessoa.sexo == "Masculino"){
        idade_homem = idade_homem + pessoa.idade
        cont_homem = cont_homem +1
      }
      else {
        idade_mulher = idade_mulher + pessoa.idade
        cont_mulher = cont_mulher +1
      }
    }
    if(cont_mulher >=1){
      media_idade_mulheres = idade_mulher / cont_mulher;
    }
    if(cont_homem >=1){
      media_idade_homens = idade_homem / cont_homem;
    }
    const pessoa = {
      media_idade_homens,
      media_idade_mulheres
    }
    return pessoa;
  }


  
  estatisticasPessoas()
  {
    const pessoas = JSON.parse(localStorage.getItem('pessoas'));
    let estatisticas = [];
    let estatisticasIdx = {};
    for (const cidade of this.cidades) {
      estatisticasIdx[cidade] = estatisticas.length;
      estatisticas.push({ nome: cidade, quantidade: 0, soma: 0, media: 0, homem : 0, mulher : 0, porcenth : 0, porcentm : 0, qtHomem:0, qtMulher:0 , geralHomen:0 , geralMulher:0, mediaMulher:0, mediaHomem:0});
    }
//porcentagens de pessoas por sexo nas cidades
    for (const pessoa of pessoas) {
      estatisticas[estatisticasIdx[pessoa.cidade]].quantidade++;
      estatisticas[estatisticasIdx[pessoa.cidade]].soma += pessoa.idade;
      if (estatisticas[estatisticasIdx[pessoa.cidade]].nome === "Palmas"){
        if (pessoa.sexo == "Masculino"){
          estatisticas[estatisticasIdx[pessoa.cidade]].homem++;
        }else{
          estatisticas[estatisticasIdx[pessoa.cidade]].mulher++;
        }
        estatisticas[estatisticasIdx[pessoa.cidade]].porcenth = Math.round(estatisticas[estatisticasIdx[pessoa.cidade]].homem * 100 / (estatisticas[estatisticasIdx[pessoa.cidade]].homem + estatisticas[estatisticasIdx[pessoa.cidade]].mulher));
        estatisticas[estatisticasIdx[pessoa.cidade]].porcentm = Math.round(estatisticas[estatisticasIdx[pessoa.cidade]].mulher * 100 / (estatisticas[estatisticasIdx[pessoa.cidade]].homem + estatisticas[estatisticasIdx[pessoa.cidade]].mulher));
      }else if (estatisticas[estatisticasIdx[pessoa.cidade]].nome === "Porto Nacional")
      {
        if (pessoa.sexo == "Masculino"){
        estatisticas[estatisticasIdx[pessoa.cidade]].homem++;
        }else{
        estatisticas[estatisticasIdx[pessoa.cidade]].mulher++;
        }
        estatisticas[estatisticasIdx[pessoa.cidade]].porcenth = Math.round(estatisticas[estatisticasIdx[pessoa.cidade]].homem * 100 / (estatisticas[estatisticasIdx[pessoa.cidade]].homem + estatisticas[estatisticasIdx[pessoa.cidade]].mulher));
        estatisticas[estatisticasIdx[pessoa.cidade]].porcentm = Math.round(estatisticas[estatisticasIdx[pessoa.cidade]].mulher * 100 / (estatisticas[estatisticasIdx[pessoa.cidade]].homem + estatisticas[estatisticasIdx[pessoa.cidade]].mulher));
      }
      else if (estatisticas[estatisticasIdx[pessoa.cidade]].nome === "Miranorte")
      {
        if (pessoa.sexo == "Masculino"){
        estatisticas[estatisticasIdx[pessoa.cidade]].homem++;
        }else{
        estatisticas[estatisticasIdx[pessoa.cidade]].mulher++;
        }
        estatisticas[estatisticasIdx[pessoa.cidade]].porcenth = Math.round(estatisticas[estatisticasIdx[pessoa.cidade]].homem * 100 / (estatisticas[estatisticasIdx[pessoa.cidade]].homem + estatisticas[estatisticasIdx[pessoa.cidade]].mulher));
        estatisticas[estatisticasIdx[pessoa.cidade]].porcentm = Math.round(estatisticas[estatisticasIdx[pessoa.cidade]].mulher * 100 / (estatisticas[estatisticasIdx[pessoa.cidade]].homem + estatisticas[estatisticasIdx[pessoa.cidade]].mulher));
      }
      else if (estatisticas[estatisticasIdx[pessoa.cidade]].nome === "Luzimangues")
      {
        if (pessoa.sexo == "Masculino"){
        estatisticas[estatisticasIdx[pessoa.cidade]].homem++;
        }else{
        estatisticas[estatisticasIdx[pessoa.cidade]].mulher++;
        }
        estatisticas[estatisticasIdx[pessoa.cidade]].porcenth = Math.round(estatisticas[estatisticasIdx[pessoa.cidade]].homem * 100 / (estatisticas[estatisticasIdx[pessoa.cidade]].homem + estatisticas[estatisticasIdx[pessoa.cidade]].mulher));
        estatisticas[estatisticasIdx[pessoa.cidade]].porcentm = Math.round(estatisticas[estatisticasIdx[pessoa.cidade]].mulher * 100 / (estatisticas[estatisticasIdx[pessoa.cidade]].homem + estatisticas[estatisticasIdx[pessoa.cidade]].mulher));
      }
    }

    for (let estatistica of estatisticas) {
      if (estatistica.quantidade != 0) {
        estatistica.media = estatistica.soma / estatistica.quantidade;
      }
    }

    for (let estatistica of pessoas) {      
      if (estatistica.sexo ==="Masculino") {
        estatistica.qtHomem +=1;
        estatistica.geralHomen = estatistica.geralHomen + estatistica.idade
      }
      else{
        estatistica.qtMulher +=1;
        estatistica.geralMulher = estatistica.geralMulher + estatistica.idade
      }
    }
    for (let estatistica of estatisticas) {      
      if (estatistica.qtHomem >=1) {
        estatistica.mediaHomem = estatistica.geralHomen / estatistica.qtHomem
      }
      if(estatistica.qtMulher >= 1){
        estatistica.mediaMulher = estatistica.geralMulher / estatistica.qtMulher
      }
    }
    return estatisticas;
  }
  
  
}
