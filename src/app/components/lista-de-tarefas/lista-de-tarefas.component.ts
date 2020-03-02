import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../models/Tarefas';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  lista:Tarefa[] = [];

  constructor() { 
    this.lista.push(new Tarefa("Escovar o cabelo!!",false));
    this.lista.push(new Tarefa("Escovar o x!!",false));
    this.lista.push(new Tarefa("Escovar o z!!",false));
  }

  ngOnInit(): void {
  }

}
