import { Component } from '@angular/core';
import { Grupo } from '../../modelos/grupo.interface';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent {
  grupo: Grupo;

  constructor() {
    this.grupo = {
      nomeAluno1: 'Michele',
      numeroAluno1: 'al80395',
      turmaAluno1: 'Turma A',
      emailAluno1: 'michelefmedeiros@gmail.com',
      nomeAluno2: 'Rafael',
      numeroAluno2: 'al80987',
      turmaAluno2: 'Turma B',
      emailAluno2: 'rafael@example.com'
    };
  }
}
