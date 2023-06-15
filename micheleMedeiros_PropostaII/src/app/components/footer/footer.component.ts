import { Component } from '@angular/core';
import { Grupo } from '../../modelos/grupo.interface';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  grupo: Grupo;

  constructor() {
    this.grupo = {
      nomeAluno1: 'Michele Medeiros',
      numeroAluno1: 'al80395',
      turmaAluno1: 'Turma 2',
      emailAluno1: 'michelefmedeiros@gmail.com',
      nomeAluno2: 'Rafael Costa ',
      numeroAluno2: 'al80076 ',
      turmaAluno2: 'Turma 2',
      emailAluno2: 'rafael@example.com'
    };
  }
}
